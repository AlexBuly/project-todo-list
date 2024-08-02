import { LocalStorage } from "./addToStorage";
import closeForm from "./closeForm";
import { createButton, createBreak, createFieldset, createForm, createInput, createLabel, createOption, createSelect } from "./DOMElements";
import Todo from "./todoItem";
import { getProject } from "./arrays";

export function editProject(projectId, newTitle) {
    const storage = LocalStorage();
    const projects = storage.getStorageProject();
    let project = projects.find(proj => proj.id === projectId);

    if (project) {
        project.title = newTitle;
        //localStorage.setItem("projects", JSON.stringify(projects));
        storage.saveProjects(projects);
        storage.displayProjects();
    }  
}

export const formProject = (projectId) => {
    const storage = LocalStorage();
    const projects = storage.getStorageProject();
    let project = projects.find(proj => proj.id === projectId);
    const projectList = document.querySelector(".projects");
    const form = createForm(".edit-form");
    const fieldset = createFieldset();
    form.appendChild(fieldset);
    projectList.appendChild(form);
    const br = createBreak();

    const newTitle = createInput("text", "title-edit", "title-edit");
    newTitle.value = project.title;
    const tLabel = createLabel("title-edit", "Title:");

    fieldset.appendChild(tLabel);
    fieldset.appendChild(newTitle);
    fieldset.appendChild(br);

    const post = createButton("Submit", "project-submit");
    fieldset.appendChild(post);

    post.addEventListener("click", (event) => {
        if (newTitle.value === "") {
            alert("Title required.")
        } else {
            const newProject = document.querySelector(".create-project");
            const projectElement = document.querySelector(".project-page");
            event.preventDefault();
            closeForm(form, newProject);
            if (newTitle) {
                editProject(project.id, newTitle.value);
                projectElement.style.display = "flex";
            }   
        }
    });
}

export function editTodo(todoTitle, newItems) {
    const currentProject = getProject();
    const storage = LocalStorage();

    let todo = currentProject.todo.find(todo => todo.title === todoTitle);
    if (todo) {
        todo.title = newItems.title; 
        todo.description = newItems.description;
        todo.dueDate = newItems.dueDate;
        todo.priority = newItems.priority;
        todo.completed = newItems.completed;

        console.log(currentProject.todo);

        const newTodo = new Todo(currentProject.todo);

        storage.updateProject(currentProject.id, currentProject);
        storage.displayProjects();
        newTodo.displayTodos();
    }
}

export function editTodoForm(todoTitle) {
    const currentProject = getProject();
    const storage = LocalStorage();
    let todo = currentProject.todo.find(todo => todo.title === todoTitle);
    const todoViewing = document.querySelector(".todos");
    const todoBtn = document.querySelector(".new-todo");
    const defaultTodo = document.querySelector(".todo-container");
    todoBtn.style.visibility = "hidden";
    
    const form = createForm(".edit-formT");
    const fieldset = createFieldset();
    form.appendChild(fieldset);
    todoViewing.appendChild(form);
    const br = createBreak();

    const titleContainer = document.createElement("div");
    titleContainer.classList.add("form-title");
    fieldset.appendChild(titleContainer);

    const close = createButton("X","closeBtn");
    titleContainer.appendChild(close);

    const todoInput = createInput("text", "editTitle", "editTitle");
    todoInput.value = todo.title;
    const tLabel = createLabel("editTitle", "Title:");

    fieldset.appendChild(tLabel);
    fieldset.appendChild(todoInput);
    fieldset.appendChild(br);

    const desInput = createInput("text", "descriptionEdit", "descriptionEdit");
    desInput.value = todo.description;
    const dLabel = createLabel("descriptionEdit", "Description");

    fieldset.appendChild(dLabel);
    fieldset.appendChild(desInput);
    fieldset.appendChild(br.cloneNode());

    const dueDate = createInput("date", "due-edit", "due-edit");
    dueDate.value = todo.dueDate;
    const dueLabel = createLabel("due-edit", "Due date:");

    fieldset.appendChild(dueLabel);
    fieldset.appendChild(dueDate);
    fieldset.appendChild(br.cloneNode());

    const priority = createSelect("priorityEdit", "priorityEdit");
    const priorityLabel = createLabel("priorityEdit", "Priority");

    fieldset.appendChild(priorityLabel);
    fieldset.appendChild(priority);
    fieldset.appendChild(br.cloneNode());

    const option1 = createOption("Low", "Low");
    const option2 = createOption("Medium", "Medium");
    const option3 = createOption("High", "High");

    priority.appendChild(option1);
    priority.appendChild(option2);
    priority.appendChild(option3);

    priority.value = todo.priority;

    const submit = createButton("Submit", "edit-todo");
    fieldset.appendChild(submit);

    submit.addEventListener("click", (event) => {
        event.preventDefault();
        if (todoInput.value === "") {
            alert("Title required.");
        } else if (dueDate.value === "") {
            alert("Date required.")
        } else {
            closeForm(form, todoBtn);

            if (todoInput && desInput && dueDate && priority) {
                const newDetails = {
                    title: todoInput.value,
                    description: desInput.value,
                    dueDate: dueDate.value,
                    priority: priority.value,
                    completed: todo.completed
                }
                editTodo(todo.title, newDetails);
                defaultTodo.style.display = "flex";
            }
        }
    });

    close.addEventListener("click", (event) => {
        event.preventDefault();
        const newTodo = new Todo(currentProject.todo);
        closeForm(form, todoBtn);
        newTodo.displayTodos();
    })
}

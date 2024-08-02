import { createButton, createForm, createFieldset, createLabel, createBreak, createInput, createOption, createSelect } from "./DOMElements";
import closeForm from "./closeForm";
import { addProject } from "./addProject";
import addTodo from "./addTodo";

export function projectForm() {
    const projectList = document.querySelector(".projects");
    const newProject = document.querySelector(".create-project");
    const projectPage = document.querySelector(".project-page");
    newProject.style.visibility = "hidden";
   
    const form = createForm("project-form");
    const fieldset = createFieldset();
    form.appendChild(fieldset);
    projectList.appendChild(form);
    const br = createBreak();

    const titleInput = createInput("text", "title", "title");
    const tLabel = createLabel("title", "Title:");
    
    fieldset.appendChild(tLabel);
    fieldset.appendChild(titleInput);
    fieldset.appendChild(br);

    const post = createButton("Add Project", "project-submit");
    fieldset.appendChild(post);

    post.addEventListener("click", (event) => {
        event.preventDefault();
        addProject();
        closeForm(form, newProject);
        projectPage.style.display = "flex";
    });

    const close = createButton("Close", "close-element");
    fieldset.appendChild(close);

    close.addEventListener("click", () => {
        closeForm(form, newProject);
        projectPage.style.display = "flex";
    });
}

export function todoForm() {
    const todoViewing = document.querySelector(".todos");
    const todoBtn = document.querySelector(".new-todo");
    const defaultTodo = document.querySelector(".todo-container");
    todoBtn.style.visibility = "hidden";

    const form = createForm("todo-form");
    const fieldset = createFieldset();
    fieldset.classList.add("todo-field");
    form.appendChild(fieldset);
    todoViewing.appendChild(form);

    const titleContainer = document.createElement("div");
    titleContainer.classList.add("form-title");
    fieldset.appendChild(titleContainer);

     const close = createButton("X","closeBtn");
     titleContainer.appendChild(close);

    const todoInput = createInput("text", "todoTitle", "todoTitle");
    const tLabel = createLabel("todoTitle", "Title:");
    const br = createBreak();

    fieldset.appendChild(tLabel);
    fieldset.appendChild(todoInput);
    fieldset.appendChild(br);

    const desInput = createInput("text", "description", "description");
    const dLabel = createLabel("description", "Description");

    fieldset.appendChild(dLabel);
    fieldset.appendChild(desInput);
    fieldset.appendChild(br.cloneNode());

    const dueDate = createInput("date", "due-date", "due-date");
    const dueLabel = createLabel("due-date", "Due date:");

    fieldset.appendChild(dueLabel);
    fieldset.appendChild(dueDate);
    fieldset.appendChild(br.cloneNode());

    const priority = createSelect("priority", "priority");
    const priorityLabel = createLabel("priority", "Priority");

    fieldset.appendChild(priorityLabel);
    fieldset.appendChild(priority);
    fieldset.appendChild(br.cloneNode());

    const option1 = createOption("Low", "Low");
    const option2 = createOption("Medium", "Medium");
    const option3 = createOption("High", "High");

    priority.appendChild(option1);
    priority.appendChild(option2);
    priority.appendChild(option3);

    const submit = createButton("Add Todo", "todo-btn");
    fieldset.appendChild(submit);

    submit.addEventListener("click", (event) => {
        event.preventDefault();
        addTodo();
        closeForm(form, todoBtn);
        defaultTodo.style.display = "flex";
    });


    close.addEventListener("click", () => {
        closeForm(form, todoBtn);
        defaultTodo.style.display = "flex";

    })
}


import DefaultLoading from "./defaultLoading";
import Project from "./projects";
import Todo from "./todoItem";
import AddTodo from "./addTodo";
import closeForm from "./closeForm";
import addProject from "./addProject";

// project form 

export function projectForm() {
    const projectList = document.querySelector(".projects");
    const newProject = document.querySelector(".add-project");

    const form = document.createElement("form");
    form.classList.add("project-form");
    const fieldset = document.createElement("fieldset");
    form.setAttribute("method", "post");
    form.setAttribute("action", "/");
    form.appendChild(fieldset);
    projectList.appendChild(form);
    const br = document.createElement("br");

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "title";
    titleInput.name= "title";
    const tLabel = document.createElement("label");
    tLabel.htmlFor = "title";
    tLabel.textContent = "Title: ";
    fieldset.appendChild(tLabel)
    fieldset.appendChild(titleInput);
    fieldset.appendChild(br);

    const post = document.createElement("button");
    post.type = "sumbit";
    post.textContent = "Add project";
    fieldset.appendChild(post);

    const close = document.createElement("button");
    close.textContent = "Close";
    fieldset.appendChild(close);

    close.addEventListener("click", () => {
        closeForm(form, newProject);
    });

    post.addEventListener("click", addProject);
}

// todo-item form 
export function todoForm() {
    const todoViewing = document.querySelector(".todos");
    
    const form = document.createElement("form");
    form.classList.add("todo-form");
    const fieldset = document.createElement("fieldset");
    form.setAttribute("method", "post");
    form.setAttribute("action", "/");
    form.appendChild(fieldset);
    todoViewing.appendChild(form);
    const br = document.createElement("br");

    const titleInput = document.createElement("input");
    titleInput.type = "text"
    titleInput.id = "titleTodo";
    titleInput.name= "titleTodo";
    const tLabel = document.createElement("label");
    tLabel.htmlFor = "titleTodo";
    tLabel.textContent = "Title: ";
    fieldset.appendChild(tLabel)
    fieldset.appendChild(titleInput);
    fieldset.appendChild(br);

    const desInput = document.createElement("input");
    desInput.type = "text"
    desInput.id = "description";
    desInput.name= "description";
    const desLabel = document.createElement("label");
    desLabel.htmlFor = "description";
    desLabel.textContent = "Description: ";
    fieldset.appendChild(desLabel)
    fieldset.appendChild(desInput);
    fieldset.appendChild(br.cloneNode());

    const dueInput = document.createElement("input");
    dueInput.type = "text"
    dueInput.id = "due-date";
    desInput.name= "due-date";
    const dueLabel = document.createElement("label");
    dueLabel.htmlFor = "description";
    dueLabel.textContent = "Due Date: ";
    fieldset.appendChild(dueLabel)
    fieldset.appendChild(dueInput);
    fieldset.appendChild(br.cloneNode());

    const pInput = document.createElement("select");
    pInput.id = "priority";
    pInput.name = "priority";
    const pLabel = document.createElement("label");
    pLabel.htmlFor = "priority";
    pLabel.textContent = "Priority:";
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
    const option3 = document.createElement("option");
    option1.value = "Low";
    option1.textContent = "Low";
    option2.value = "Medium";
    option2.textContent = "Medium";
    option3.value = "High";
    option3.textContent = "High";
    pInput.appendChild(option1);
    pInput.appendChild(option2);
    pInput.appendChild(option3);
    fieldset.appendChild(pLabel)
    fieldset.appendChild(pInput);
    fieldset.appendChild(br.cloneNode());

    const post = document.createElement("button");
    post.type = "sumbit";
    post.textContent = "Add item";
    fieldset.appendChild(post);
    const newProject = document.querySelector(".create-project");

    const close = document.createElement("button");
    close.textContent = "Close";
    fieldset.appendChild(close);

    post.addEventListener("click", (event) => {
        event.preventDefault();
        AddTodo();
        closeForm(form, newProject);
    })

    close.addEventListener("click", (event) => {
        event.preventDefault();
        closeForm(form, newProject)
    })



    


    
}
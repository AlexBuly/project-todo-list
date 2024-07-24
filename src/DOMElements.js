import { getTodo } from "./addTodo";
import { getProject } from "./arrays";

export function createForm(className) {
    const form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "/");
    if (className) form.classList.add(className);
    return form;
}

export function createInput(type, name, id) {
    const input = document.createElement("input");
    input.type = type;
    if (name) input.name = name;
    if (id) input.id = id;
    return input;
}

export function createSelect(name, id) {
    const select = document.createElement("select");
    if (name) select.name = name;
    if (id) select.id = id;
    return select;
}

export function createFieldset() {
    const fieldset = document.createElement("fieldset");
    return fieldset;
}

export function createLabel(htmlFor, textContent) {
    const label = document.createElement("label");
    label.htmlFor = htmlFor;
    label.textContent = textContent;
    return label;
}

export function createButton(textContent, className) {
    const button = document.createElement("button");
    button.textContent = textContent;
    if (className) button.className = className;
    return button;
}

export function createDiv(className) {
    const div = document.createElement("div");
    if (className) div.className = className;
    return div;
}

export function createBreak() {
    const br = document.createElement("br");
    return br;
}

export function createOption(value, textContent) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = textContent;
    return option;
}

let todoContainer = createDiv("todo-container");
let todoElement = createDiv("todo-element");

let todoHeading = document.createElement("h2");
todoHeading.classList.add("todo-heading");

let description = createDiv("descriptionDiv");
let date = createDiv("dueDateDiv");
let pri = createDiv("priorityDiv");

export function getHeading() {
    return todoHeading;
}

export function getDes() {
    return description;
}


export function getDate() {
    return date;

}

export function getPriority() {
    return pri;
}

export function getTodoContainer() {
    return todoContainer;
}
 
export function todoDisplay() {
    //const project = getProject();

    const newTodo = getTodo();
    console.log(newTodo);
    
    const todoContainer = getTodoContainer();


    const todoElement = createDiv("todo-element");
    todoContainer.appendChild(todoElement);

    const initialTitle = createDiv("element-title");
    todoElement.appendChild(initialTitle);

    const head = document.createElement("h2");
    head.textContent = newTodo.todoTitle();
    initialTitle.appendChild(head);

    const toggleOpen = createButton("toggleOpen");
    toggleOpen.textContent = "+"
    initialTitle.appendChild(toggleOpen);

    const toggleClose = createButton("toggleClose");
    toggleClose.textContent = "-"
    initialTitle.appendChild(toggleClose);

    const description = createDiv("descriptionDiv");
    const dueDateDiv = createDiv("dueDiv");
    const priorityDiv = createDiv("priorityDiv");

    const bottomElements = createDiv("todo-content");
    todoElement.appendChild(bottomElements);
    
    description.textContent = newTodo.todoDes();
    dueDateDiv.textContent = newTodo.todoDue();
    priorityDiv.textContent = newTodo.todoPriority();

    bottomElements.appendChild(description);
    bottomElements.appendChild(dueDateDiv);
    bottomElements.appendChild(priorityDiv);

    bottomElements.style.display = "none";

    toggleOpen.addEventListener("click", () => {
        bottomElements.style.display = "block";;
    });

    toggleClose.addEventListener("click", () => {
        bottomElements.style.display = "none";
    })

    if (priorityDiv.textContent == "High") {
        todoElement.style.backgroundColor = "red";
        todoElement.style.color = "white"
    } else if (priorityDiv.textContent == "Medium") {
        todoElement.style.backgroundColor = "yellow";    
    } else if (priorityDiv.textContent == "Low") {
        todoElement.style.backgroundColor = "green";
        todoElement.style.color = "white";
    }
}
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

export function getHeading() {
    return todoHeading;
}

export function getTodoContainer() {
    return todoContainer;
}
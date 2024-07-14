import { getTodo } from "./DOMElements";
import { getArray } from "./addProject";

export function openProject() {
    const todoContainer = document.querySelector(".todo-container");
    todoContainer.textContent = `${getArray()}`;
    console.log(getArray());
}
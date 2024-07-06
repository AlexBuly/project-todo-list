import DefaultLoading from "./defaultLoading";
import { todoForm } from "./forms";
import { AddTodo } from "./addTodo";
import { todoElement } from "./addTodo";

// creates button to open project
export default function projectSide() {
    const projectList = document.querySelector(".projects");
    const projectElemnt = document.createElement("button");
    projectElemnt.classList.add("project-element");
    projectList.appendChild(projectElemnt);
    projectElemnt.addEventListener("click", todoElement);
}
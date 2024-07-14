import { AddProject, getProject } from "./arrays";
import Project from "./projects";
import { openProject } from "./openProject";

let newProject;
let todoArray;

export function addProject() {
    const titleValue = document.querySelector("#title").value;
    const projectPage = document.querySelector(".project-page");

    AddProject(titleValue);

    const projectArray = getProject();
    
    todoArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

    newProject = new Project(projectArray[projectArray.length - 1], todoArray);

    const projectBtn = document.createElement("button");
    projectBtn.id = "project-btn";
    projectBtn.textContent = newProject.projectName();
    projectPage.appendChild(projectBtn);

    projectBtn.addEventListener("click", () => {
        openProject();
    });

    console.log(newProject);

}

export function projectObj() {
    return newProject;
}

export function getArray() {
    return todoArray;
}


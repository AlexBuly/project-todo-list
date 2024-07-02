import {projectForm, todoForm} from "./forms";

export default function DefaultLoading() {
    const container = document.querySelector(".main-container");

    const projectList = document.createElement("div");
    projectList.classList.add("projects");
    container.appendChild(projectList);
    
    const todoViewing = document.createElement("div");
    todoViewing.classList.add("todos");
    container.appendChild(todoViewing);
    
    const sideHeading = document.createElement("h2");
    sideHeading.classList.add("side-heading")
    sideHeading.textContent = "Projects";
    projectList.appendChild(sideHeading);
    
    const first = document.createElement("button");
    first.classList.add("default-project");
    first.textContent = "Work";
    projectList.appendChild(first);
    
    const projectName = document.createElement("h1");
    projectName.classList.add("project-head");
    todoViewing.appendChild(projectName);
    
    first.addEventListener("click", () => {
      projectName.textContent = first.textContent;
    });
    
    const newProject = document.createElement("button");
    newProject.classList.add("add-project");
    newProject.textContent = "New Project";
    projectList.appendChild(newProject);

    newProject.addEventListener("click", () => {
        newProject.style.visibility = "hidden";
        projectForm();
    });
}

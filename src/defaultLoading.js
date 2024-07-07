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
    
    const newProject = document.createElement("button");
    newProject.classList.add("create-project");
    newProject.textContent = "New Project";
    projectList.appendChild(newProject);

    newProject.addEventListener("click", () => {
        newProject.style.visibility = "hidden";
        projectForm();
    });

    const projectS = JSON.parse(localStorage.getItem('project'));
    
    
    if (localStorage.length >= 1) {
      console.log(projectS.length);
      console.log(projectS);
    }

    for (let i = 0; i < projectS.length; i++) {
      const button = document.createElement("button");
      button.id = "project-btn";
      button.textContent = projectS[i];
      projectList.appendChild(button);
    }

    //localStorage.clear()
}

import { setProject } from "./arrays";
import { projectObj } from "./addProject";
import { getProject } from "./arrays";
import { getI } from "./addProject";
import { displayTodos } from "./todoElements";

export function projectElement() {
    const newProject = projectObj();
    const projectPage = document.querySelector(".project-page");
    let i = getI();
    let project = getProject();

    const projectBtn = document.createElement("button");
    projectBtn.classList.add("project-btn");
    projectBtn.id = i;
    projectBtn.textContent = newProject.projectName();
    projectPage.appendChild(projectBtn);

    // gets a particular Project instance 
    projectBtn.addEventListener("click", (event) => {
        //openProject();
        let buttonId = event.target.id;
        const currProject = project.find(project => project.id == buttonId);
        setProject(currProject);
        //displayTodos();
        console.log(getProject());
    });
    

}   
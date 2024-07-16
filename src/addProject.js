import { AddProject, getProject, setProject } from "./arrays";
import Project from "./projects";
import { openProject } from "./openProject";

let newProject;
let todoArray;
let i = 0;
let projects = getProject();

export function addProject() {
    const titleValue = document.querySelector("#title").value;
    const projectPage = document.querySelector(".project-page");
    
    todoArray = [];

    const prjObj = {
        title: titleValue,
        todo: todoArray,
        id: ++i   
    }

    AddProject(prjObj);


    newProject = new Project(prjObj.title, prjObj.todo, prjObj.id);

    const projectBtn = document.createElement("button");
    projectBtn.classList.add("project-btn");
    projectBtn.id = i;
    projectBtn.textContent = newProject.projectName();
    projectPage.appendChild(projectBtn);

    // gets a particular Project instance 
    projectBtn.addEventListener("click", (event) => {
        //openProject();
        let target = event.target.id;
        const currProject = projects.find(project => project.id == target);
        setProject(currProject);
        console.log(getProject());
    });
    
    console.log(newProject);

}

export function projectObj() {
    return newProject;
}

export function getArray() {
    return todoArray;
}


import { setProject } from "./arrays";
import { projectObj } from "./addProject";
import { getProject } from "./arrays";
import { getI } from "./addProject";
import { createButton, createDiv, getTodoContainer } from "./DOMElements";
import { projectForm, todoForm } from "./forms";
import Project from "./projects";
import Todo from "./todoItem";

export function projectElement() {
    const newProject = projectObj();
    const projectPage = document.querySelector(".project-page");
    const projectHead = document.querySelector(".project-head");
    let i = getI();
    let project = getProject();

    const projectBtn = document.createElement("button");
    projectBtn.classList.add("project-btn");
    projectBtn.id = i;
    projectBtn.textContent = newProject.projectName();
    projectPage.appendChild(projectBtn);

    // gets a particular Project instance 
    projectBtn.addEventListener("click", (event) => {
        projectHead.textContent  = newProject.projectName();
        let buttonId = event.target.id;
        const currProject = project.find(project => project.id == buttonId);
        
        setProject(currProject);
        console.log(getProject());

        if (currProject && currProject.todoInstance) {
          currProject.todoInstance.displayObjects();
        }
    });
} 

export function defaultProject() {
    const todoViewing = document.querySelector(".todos");
    const projectBtn = document.querySelector(".project-page");

    const projectHeading = document.createElement("h1");
     projectHeading.classList.add("project-head");
     todoViewing.appendChild(projectHeading);
    
    const first = createButton("My Project", "default-project");
    first.id = "0";
    projectBtn.appendChild(first);

    const defaultP = [];

    setProject(defaultP);

    const todos = [];

    const dObject = {
      title: "My Project",
      todo: todos,
      id: 0,
      todoInstance: new Todo(todos)
    }

    defaultP.push(dObject);

    const firstElement = new Project(dObject.title, dObject.todo, dObject.id);

    let project = getProject();

    first.addEventListener("click", (event) => {
      projectHeading.textContent = firstElement.projectName();
      let buttonId = event.target.id;
      const currProject = project.find(project => project.id == buttonId);
      
      setProject(currProject);
      console.log(getProject());

      if (currProject && currProject.todoInstance) {
        currProject.todoInstance.displayObjects();
      }
    });
}
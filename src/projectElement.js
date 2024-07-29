import { setProject } from "./arrays";
import { projectObj } from "./addProject";
import { getProject } from "./arrays";
import { getId } from "./addProject";
import { createButton, createDiv, getTodoContainer } from "./DOMElements";
import Project from "./projects";
import Todo from "./todoItem";
import { openProject } from "./openProject";
import { LocalStorage } from "./addToStorage";
import { setCurrentProject } from "./arrays";

export function projectElement() {
    const newProject = projectObj();
    const projectPage = document.querySelector(".project-page");
    const projectHead = document.querySelector(".project-head");
    let i = getId();
    let project = getProject();


    const projectBtn = document.createElement("button");
    projectBtn.classList.add("project-btn");
    projectBtn.id = i;
    projectBtn.textContent = newProject.projectName();
    projectPage.appendChild(projectBtn);

    // openProject(event, project, projectHead, newProject)

    // gets a particular Project instance 
    projectBtn.addEventListener("click", (event) => openProject(event, project, projectHead, newProject));
} 

export function defaultProject() {
  const storage = LocalStorage();
    const todoViewing = document.querySelector(".todos");
    const projectPage = document.querySelector(".projects");
    const projectList = document.querySelector(".project-page");
    const projectHeading = document.querySelector(".project-head");
    
    const first = createButton("My Project", "default-project");
    first.id = 0;
    projectPage.insertBefore(first, projectList);

    const defaultP = [];

    setProject(defaultP);

    let project = getProject();

    const todos = [];

    const dObject = {
      title: "My Project",
      todo: todos,
      id: 0,
      todoInstance: new Todo(todos)
    }

    defaultP.push(dObject);

    const firstElement = new Project(dObject.title, dObject.todo, dObject.id);

    storage.storageTodo(project.id, dObject);

    first.addEventListener("click", (event) => {
      setCurrentProject(project.id);
      openProject(event, project, projectHeading, firstElement)
})
}
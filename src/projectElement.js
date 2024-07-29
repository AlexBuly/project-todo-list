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

let dObject;

const storage = LocalStorage();

export function defaultProject() {
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

    dObject = {
      title: "My Project",
      todo: todos,
      id: 0,
      todoInstance: new Todo(todos)
    }

    defaultP.push(dObject);
    const firstElement = new Project(dObject.title, dObject.todo, dObject.id);

    first.addEventListener("click", (event) => openProject(event, project, projectHeading, firstElement))
}
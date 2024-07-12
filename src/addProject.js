import { AddProject, getProject, getTodos, addTodo } from "./arrays";
import { projectForm } from "./forms";
import Project from "./projects";

let newProject;

export function addProject() {
    const titleValue = document.querySelector("#title").value;

    AddProject(titleValue);

    const projectArray = getProject();
    const todoArray = getTodos();

    newProject = new Project(projectArray[projectArray.length - 1], todoArray);
    console.log(newProject);
}

export function projectObj() {
    return newProject;
}


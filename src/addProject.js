import { AddToProject, getProject, setProject } from "./arrays";
import Project from "./projects";
import { openProject } from "./openProject";
import { getTodos } from "./arrays";

let newProject;
let todoArray;
let i = 0;
let prjObj;

let projects = getProject();

export function addProject() {
    const titleValue = document.querySelector("#title").value;

    const project = [];
    
    setProject(project);
    
    todoArray = [];

    prjObj = {
        title: titleValue,
        todo: todoArray,
        id: ++i   
    }

   project.push(prjObj);

    newProject = new Project(prjObj.title, prjObj.todo, prjObj.id);
    console.log(newProject);

}

export function projectObj() {
    return newProject;
}

export function getArray() {
    return todoArray;
}

export function setTodo(currTodo) {
    todoArray = currTodo;
}

export function getI() {
    return i;
}

export function getObject() {
    return prjObj;
}


import { setProject } from "./arrays";
import Project from "./projects";
import { openProject } from "./openProject";
import { getTodos } from "./arrays";
import Todo from "./todoItem";
import { AddtoStorage } from "./addToStorage";

let newProject;
let todoArray;
let date = Date.now();
let prjObj;

export function addProject() {
    const titleValue = document.querySelector("#title").value;

    let project = [];

    setProject(project);
    
    todoArray = [];

    prjObj = {
        title: titleValue,
        todo: todoArray,
        id: date, 
        todoInstance: new Todo(todoArray)   
    }

    //AddtoStorage(prjObj);
    project.push(prjObj);
    AddtoStorage(prjObj);

   //localStorage.setItem("project", JSON.stringify(project));

    newProject = new Project(prjObj.title, prjObj.todo, prjObj.id);
    console.log(newProject);
}

export function projectObj() {
    return newProject;
}

export function getArray() {
    return todoArray;
}

export function getId() {
    return date;
}

export function getObject() {
    return prjObj;
}


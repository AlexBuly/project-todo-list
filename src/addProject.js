import { setProject } from "./arrays";
import Project from "./projects";
import Todo from "./todoItem";
import { LocalStorage } from "./addToStorage";

let newProject;
let todoArray;
let date = Date.now();
let prjObj;

export function addProject() {
    const titleValue = document.querySelector("#title").value;
    const storage = LocalStorage();

    let project = [];

    setProject(project);
    
    todoArray = [];

    prjObj = {
        title: titleValue,
        todo: todoArray,
        id: date, 
        todoInstance: new Todo(todoArray)   
    }

    project.push(prjObj);
    storage.AddToStorage(prjObj);
    storage.displayProjects();

    newProject = new Project(prjObj.title, prjObj.todo, prjObj.id);
}


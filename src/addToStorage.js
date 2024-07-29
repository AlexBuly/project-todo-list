import { setProject, getProject } from "./arrays";
import { openProject } from "./openProject";
import { createBreak, createButton, getTodoContainer } from "./DOMElements";
import { getTodo } from "./addTodo";
import Todo from "./todoItem";
import Project from "./projects";

let newTodo = getTodo();

export function AddtoStorage(project) {
    let projectStorage = JSON.parse(localStorage.getItem('projects')) || [];
    projectStorage.push(project);
    localStorage.setItem('projects', JSON.stringify(projectStorage))
}

export function displayProjects() {
    const projectElement = document.querySelector(".project-page");
    projectElement.textContent = '';
    const projectHead = document.querySelector(".project-head");
    let projectStorage = JSON.parse(localStorage.getItem('projects')) || [];
    projectStorage.map(project => {
        project.todoInstance = Object.assign(new Todo(project.todo), project.todoInstance);
        return project;
    });

    projectStorage.forEach((project, todo, id, todoInstance) => {
        const btn = document.createElement("button");
        btn.classList.add("project-btn");
        btn.id = project.id;
        btn.textContent = project.title || `Project ${id + 1}`;
        projectElement.appendChild(btn);
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete");
        deleteBtn.textContent = "Delete";
        projectElement.appendChild(deleteBtn);
        todo = `project-${todo}`;
        //todoInstance = `project-${todoInstance}`;
        todoInstance = project.todoInstance;
        console.log(projectStorage);

        // openProject(event, projectStorage, projectHead, project)
        btn.addEventListener("click", (event) => openProject(event, projectStorage, projectHead, project));
    });
}

export function storageTodo(todo) {
    let todoStorage = JSON.parse(localStorage.getItem('todos')) || [];
    todoStorage.push(todo);
    localStorage.setItem('todos', JSON.stringify(todoStorage));
}


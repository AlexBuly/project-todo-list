import { setProject, getProject } from "./arrays";
import { openProject } from "./openProject";
import { createBreak, createButton, getTodoContainer } from "./DOMElements";
import { getTodo } from "./addTodo";
import Todo from "./todoItem";
import Project from "./projects";
import { projectElement } from "./projectElement";
import { setCurrentProject } from "./arrays";

export function LocalStorage() {
    const AddToStorage = (project) => {
        let projectStorage = JSON.parse(localStorage.getItem('projects')) || [];
        project.id = Date.now();
        projectStorage.push(project)
        localStorage.setItem('projects', JSON.stringify(projectStorage));
    }

    const getStorageProject = () => {
        let projectStorage = JSON.parse(localStorage.getItem('projects')) || [];
        const currProject = getProject();
        projectStorage.map(project => {
            project.todoInstance = Object.assign(new Todo(project.todo), currProject.todoInstance);
            return project;
        });

        return projectStorage;
    }

    const displayProjects = () => {
        let projectStorage = getStorageProject();
        const projectElement = document.querySelector(".project-page");
        projectElement.textContent = '';
        const projectHead = document.querySelector(".project-head");

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

            deleteBtn.addEventListener("click", () => {
                btn.remove();
                localStorage.removeItem("projects");
            })

            todo = `project-${todo}`;
            todoInstance = `project-${todoInstance}`;
            //todoInstance = project.todoInstance;
            console.log(projectStorage);
            //const btn = projectElement();


            btn.addEventListener("click", (event) => {
                setCurrentProject(project.id);
                openProject(event, projectStorage, projectHead, project);
            });
        });
        
    }

    const storageTodo = (projectId, todoItem) => {
        let projects = getStorageProject();

        let project = projects.find(proj => proj.id === projectId);

        if (project) {
            project.todo.push(todoItem)
            project.todoInstance = new Todo(project.todo);
            localStorage.setItem('projects', JSON.stringify(projects));
        }
    }

    return {AddToStorage, getStorageProject, displayProjects, storageTodo}
}


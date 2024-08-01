import { getProject } from "./arrays";
import { openProject } from "./openProject";
import Todo from "./todoItem";
import { deleteProject } from "./delete";

export function LocalStorage() {
    const AddToStorage = (project) => {
        let projectStorage = JSON.parse(localStorage.getItem('projects')) || [];
        project.id = Date.now();
        projectStorage.push(project)
        localStorage.setItem('projects', JSON.stringify(projectStorage));
    }

    const getStorageProject = () => {
        let projectStorage = JSON.parse(localStorage.getItem('projects')) || [];
        projectStorage = projectStorage.map(project => {
            project.todoInstance = new Todo(project.todo);
            return project;
        });
        return projectStorage;
    }

    const displayProjects = () => {
        const todos = document.querySelector(".todos");
        let projectStorage = getStorageProject();
        const projectElement = document.querySelector(".project-page");
        projectElement.textContent = '';
        const projectHead = document.querySelector(".project-head");

        projectStorage.forEach((project, todo, id, todoInstance) => {
            if (project.title) {
                const btnDiv = document.createElement("div");
                btnDiv.classList.add("btn-div");
                btnDiv.style.width = "90%";
                btnDiv.style.padding = "2%"
                btnDiv.style.backgroundColor = "gray";
                projectElement.appendChild(btnDiv);

                const btn = document.createElement("button");
                btn.classList.add("project-btn");
                btn.id = project.id;
                btn.textContent = project.title;
                btn.style.width = "100%";
                btnDiv.appendChild(btn);
                
                const deleteBtn = document.createElement("button");
                const edit = document.createElement("button");
                edit.classList.add("edit")
                edit.textContent = "Edit";
                btnDiv.appendChild(edit);
                deleteBtn.classList.add("delete");
                deleteBtn.textContent = "Delete";
                btnDiv.appendChild(deleteBtn);

                deleteBtn.addEventListener("click", () => {
                    deleteProject(btnDiv, project.id);
                    projectHead.textContent = "";
                    todos.textContent = "";
                })

            todo = `project-${todo}`;
            todoInstance = `project-${todoInstance}`;
            //todoInstance = project.todoInstance;

            btn.addEventListener("click", (event) => openProject(event, projectStorage, projectHead, project));
            }
                
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

    return {AddToStorage, getStorageProject, displayProjects, storageTodo }
}


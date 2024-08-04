import { openProject } from "./openProject";
import Todo from "./todoItem";
import { deleteProject } from "./delete";
import { formProject } from "./edit";

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

    const saveProjects = (projects) => {
        localStorage.setItem('projects', JSON.stringify(projects));
    };

    const updateProject = (projectId, updatedProject) => {
        let projects = getStorageProject();
        projects = projects.map(proj => proj.id === projectId ? updatedProject : proj);
        saveProjects(projects);
    };

    const displayProjects = () => {
        let projectStorage = getStorageProject();
        const projectElement = document.querySelector(".project-page");
        projectElement.textContent = '';
        const projectHead = document.querySelector(".project-head");

        projectStorage.forEach((project, todo, todoInstance) => {
            if (project.title) {
                const btnDiv = document.createElement("div");
                btnDiv.classList.add("btn-div");
                projectElement.appendChild(btnDiv);

                const btn = document.createElement("button");
                btn.classList.add("project-btn");
                btn.id = project.id;
                btn.textContent = project.title;
                btn.style.width = "100%";
                btnDiv.appendChild(btn);
                
                const deleteBtn = document.createElement("button");
                deleteBtn.classList.add("delete");
                deleteBtn.textContent = "Delete";
                btnDiv.appendChild(deleteBtn);
                

                const edit = document.createElement("button");
                edit.classList.add("edit")
                edit.textContent = "Edit";

                const comfirmDel = document.createElement("div");
                comfirmDel.classList.add("delProj");
                btnDiv.appendChild(comfirmDel);
                comfirmDel.style.display = "none";

                const comfirmText = document.createElement("div");
                comfirmText.textContent = "Delete Project?";
                comfirmDel.appendChild(comfirmText);

                const yes = document.createElement("button");
                yes.classList.add("yes");
                yes.textContent = "Yes";
                comfirmDel.appendChild(yes);

                const no = document.createElement("button");
                no.textContent = "No";
                no.classList.add("no");
                comfirmDel.appendChild(no);


                
                edit.addEventListener("click", () => {
                    projectElement.style.display = "none";
                    formProject(project.id);

                });

                btnDiv.appendChild(edit);

                deleteBtn.addEventListener("click", () => {
                    deleteBtn.style.display = "none";
                    edit.style.display = "none";
                    comfirmDel.style.display = "grid";

                    yes.addEventListener("click", () => {
                        deleteProject(btnDiv, project.id);
                        projectHead.textContent = "";
                    });

                    no.addEventListener("click", () => {
                        deleteBtn.style.display = "block";
                        edit.style.display = "block";
                        comfirmDel.style.display = "none";
                    });
                })

            todo = `project-${todo}`;
            todoInstance = `project-${todoInstance}`;

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
            saveProjects(projects);
        }
    }

    const updateTodoItem = (updatedItem) => {
        let projects = getStorageProject();
        projects.forEach(project => {
            project.todo = project.todo.map(todo => todo.title === updatedItem.title ? updatedItem : todo);
            project.todoInstance = new Todo(project.todo);
        })

        saveProjects(projects);
    }

    return {AddToStorage, getStorageProject, displayProjects, storageTodo, updateTodoItem, saveProjects, updateProject }
}


import { setProject } from "./arrays";

export function AddtoStorage(project) {
    let projectStorage = JSON.parse(localStorage.getItem('projects')) || [];
    projectStorage.push(project);
    localStorage.setItem('projects', JSON.stringify(projectStorage));
}

export function displayProjects() {
    const projectElement = document.querySelector(".project-page");
    projectElement.textContent = '';

    let projectStorage = JSON.parse(localStorage.getItem('projects')) || [];

    projectStorage.forEach((project, todo, id, todoInstance) => {
        const btn = document.createElement("button");
        btn.classList.add("project-btn");
        btn.id = project.id;
        btn.textContent = project.title || `Project ${id + 1}`;
        projectElement.appendChild(btn);
        todo = `project-${todo}`;
        todoInstance = `project-${todoInstance}`;
        console.log(projectStorage);

        btn.addEventListener("click", () => {
            const projectHead = document.querySelector(".project-head");
            setProject(projectStorage);
            projectHead.textContent = project.title;
        })
    });
}


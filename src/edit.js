import { LocalStorage } from "./addToStorage";
import closeForm from "./closeForm";
import { createButton, createBreak, createFieldset, createForm, createInput, createLabel } from "./DOMElements";

export function editProject(projectId, newTitle) {
    const storage = LocalStorage();
    const projects = storage.getStorageProject();
    let project = projects.find(proj => proj.id === projectId);

    if (project) {
        project.title = newTitle;
        localStorage.setItem("projects", JSON.stringify(projects));
        storage.displayProjects();
    }  
}

export const formProject = (projectId) => {
    const storage = LocalStorage();
    const projects = storage.getStorageProject();
    let project = projects.find(proj => proj.id === projectId);
    const projectList = document.querySelector(".projects");
    const form = createForm(".edit-form");
    const fieldset = createFieldset();
    form.appendChild(fieldset);
    projectList.appendChild(form);
    const br = createBreak();

    const newTitle = createInput("text", "title", "title");
    newTitle.value = project.title;
    const tLabel = createLabel("title", "Title:");

    fieldset.appendChild(tLabel);
    fieldset.appendChild(newTitle);
    fieldset.appendChild(br);

    const post = createButton("Submit", "project-submit");
    fieldset.appendChild(post);

    post.addEventListener("click", (event) => {
        const newProject = document.querySelector(".create-project");
        const projectElement = document.querySelector(".project-page");
        event.preventDefault();
        closeForm(form, newProject);
        if (newTitle) {
            editProject(project.id, newTitle.value);
            projectElement.style.display = "flex";
        }
    });
}

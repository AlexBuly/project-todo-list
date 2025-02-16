import { createButton, createDiv, getTodoContainer} from "./DOMElements";
import { setProject } from "./arrays";
import { projectForm, todoForm } from "./forms";
import { LocalStorage } from "./addToStorage";

export default function DefaultLoading() {
    const container = document.querySelector(".main-container");
    const storage = LocalStorage();
  
    const project = createDiv("projects");
    container.appendChild(project);

    const sideHeading = document.createElement("h2");
    sideHeading.textContent = "Projects";
    sideHeading.classList.add("side-heading")
    project.appendChild(sideHeading);

    const projectElement = createDiv("project-page");
    project.appendChild(projectElement);

    const todoViewing = createDiv("todos");
    container.appendChild(todoViewing);

    const projectHeading = document.createElement("h1");
    projectHeading.classList.add("project-head");
    todoViewing.appendChild(projectHeading);


    const clearStorage = createButton("Clear Storage");
    clearStorage.classList.add("clear");
    project.appendChild(clearStorage);

    const array = [];
    setProject(array);

    storage.displayProjects();

    const newProject = createButton("+", "create-project");
    newProject.setAttribute("data-tooltip", "New Project");
    sideHeading.appendChild(newProject);

    newProject.addEventListener("click", () => {
      projectElement.style.display = "none";
      projectForm();
    })

    const todoBtn = createButton("+", "new-todo");
    todoBtn.setAttribute("data-tooltip", "New Todo");
    todoViewing.appendChild(todoBtn);
    todoBtn.style.display = "none";
    

    clearStorage.addEventListener("click", () => {
      localStorage.clear();
      projectElement.textContent = "";
      projectHeading.textContent = "";
      todoBtn.style.display = "none"
    })

    const todoContainer = getTodoContainer();
    todoViewing.appendChild(todoContainer);

    todoBtn.addEventListener("click", () => {
      todoContainer.style.display = "none";
      todoForm();
    });
};

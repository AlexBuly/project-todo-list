import { setProject } from "./arrays";
import { projectObj } from "./addProject";
import { getProject } from "./arrays";
import { getI } from "./addProject";
import { displayTodos } from "./todoElements";
import { createButton, createDiv, getTodoContainer } from "./DOMElements";
import { projectForm, todoForm } from "./forms";

export function projectElement() {
    const newProject = projectObj();
    const projectPage = document.querySelector(".project-page");
    let i = getI();
    let project = getProject();

    const projectBtn = document.createElement("button");
    projectBtn.classList.add("project-btn");
    projectBtn.id = i;
    projectBtn.textContent = newProject.projectName();
    projectPage.appendChild(projectBtn);

    // gets a particular Project instance 
    projectBtn.addEventListener("click", (event) => {
        //openProject();
        let buttonId = event.target.id;
        const currProject = project.find(project => project.id == buttonId);
        setProject(currProject);
        //displayTodos();
        console.log(getProject());
    });
} 

export function defaultProject() {
    const todoViewing = document.querySelector(".todos");
    const projectBtn = document.querySelector(".project-page");

    const projectHeading = document.createElement("h1");
     projectHeading.classList.add("project-head");
     projectHeading.textContent = "My Project";
     todoViewing.appendChild(projectHeading);
    
    const first = createButton("My Project", "default-project");
    projectBtn.appendChild(first);
  
    const newProject = createButton("New Project", "create-project");
    projectBtn.appendChild(newProject);

    newProject.addEventListener("click", () => {
      projectBtn.style.display = "none";
      projectForm();
    })

    const todoBtn = createButton("New Todo", "new-todo");
    todoViewing.appendChild(todoBtn);

    const todoContainer = getTodoContainer();
    todoViewing.appendChild(todoContainer);

    todoBtn.addEventListener("click", () => {
      todoContainer.style.display = "none";
      todoForm();
    });

    const defaultProject = createDiv("todo-element");
    defaultProject.style.backgroundColor = "white";
    todoContainer.appendChild(defaultProject);


    const todoTitle = document.createElement("h2");
    todoTitle.textContent = "TODO";
    defaultProject.appendChild(todoTitle);

    const description = createDiv("description");
    const dueDate = createDiv("due-date");
    const pri = createDiv("priority");

    description.textContent = "This is the project description";
    dueDate.textContent = "April 4, 2025";
    pri.textContent = "medium";

    if (pri.textContent == "high") {
      defaultProject.style.backgroundColor = "red";
      defaultProject.style.color = "white";
    } else if (pri.textContent == "medium") {
      defaultProject.style.backgroundColor = "yellow";
    } else if (pri.textContent = "low") {
      defaultProject.style.backgroundColor = "green";
      defaultProject.style.color = "white";
    }
 
    defaultProject.appendChild(description);
    defaultProject.appendChild(dueDate);
    defaultProject.appendChild(pri);
}
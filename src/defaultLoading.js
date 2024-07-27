import { createButton, createDiv, getTodoContainer} from "./DOMElements";
import { defaultProject } from "./projectElement";
import { projectForm, todoForm } from "./forms";
import Project from "./projects";
import { getProject, AddProject, getTodos } from "./arrays";
import { getI } from "./addProject";
import { getTodo } from "./addTodo";
import { displayProjects } from "./addToStorage";

export default function DefaultLoading() {
    const container = document.querySelector(".main-container");
  
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


    //const todos = getTodos();

    defaultProject();
    displayProjects();

    //const projectBtn = document.querySelector(".project-page");

    const newProject = createButton("New Project", "create-project");
    sideHeading.appendChild(newProject);

    newProject.addEventListener("click", () => {
      projectElement.style.display = "none";
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


    //console.log(projectStorage.length);

    
    /*const defaultObj = {
      title: todoTitle.textContent,
      todos: todos,
      id: "13"
    }*/

  //  AddProject(defaultObj);
  
  
    
  //   const projectObj = new Project(defaultObj.title, defaultObj.todos, defaultObj.id);
  //   console.log(projectObj);

    // const projectS = JSON.parse(localStorage.getItem('projects'));
    
    // for (let i = 0; i < projectS.length; i++) {
    //   const button = document.createElement("button");
    //   button.id = "project-btn";
    //   button.textContent = projectS[i];
    //   projectElement.appendChild(button);
    // }  
}

//localStorage.clear();

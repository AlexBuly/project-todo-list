import { createButton, createDiv, getTodoContainer} from "./DOMElements";
import { defaultProject } from "./projectElement";
import { projectForm, todoForm } from "./forms";
import Project from "./projects";
import { getProject, AddProject, getTodos } from "./arrays";

export default function DefaultLoading() {
    const container = document.querySelector(".main-container");
  
    const projectList = createDiv("projects");
    container.appendChild(projectList);

    const projectElement = createDiv("project-page");
    projectList.appendChild(projectElement);

    const todoViewing = createDiv("todos");
    container.appendChild(todoViewing);
    
    const sideHeading = document.createElement("h2");
    sideHeading.classList.add("side-heading")
    sideHeading.textContent = "Projects";
    projectElement.appendChild(sideHeading);

    //const todos = getTodos();

    defaultProject();
    
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

localStorage.clear();

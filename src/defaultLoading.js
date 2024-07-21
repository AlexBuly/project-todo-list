import { createButton, createDiv, getTodoContainer } from "./DOMElements";
import { projectForm, todoForm } from "./forms";
import Project from "./projects";
import { getProject, AddProject, getTodos } from "./arrays";

export default function DefaultLoading() {
    const container = document.querySelector(".main-container");
    
   const projects = getProject();
    
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

     const projectHeading = document.createElement("h1");
     projectHeading.classList.add("project-head");
     projectHeading.textContent = "My Project";
     todoViewing.appendChild(projectHeading);
    
    const first = createButton("My Project", "default-project");
    projectElement.appendChild(first);
  
    const newProject = createButton("New Project", "create-project");
    projectElement.appendChild(newProject);

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

    const todos = getTodos();
    
    const defaultObj = {
      title: todoTitle.textContent,
      todos: todos,
      id: "13"
    }

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

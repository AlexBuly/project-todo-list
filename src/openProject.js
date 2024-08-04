import { setProject } from "./arrays";

export function openProject(event, projArray, projectHead, projObj) {
    const todoBtn = document.querySelector(".new-todo");
    todoBtn.style.display = "block";
    projectHead.textContent = projObj.title;
    let buttonId = event.target.id;
    const currProject = projArray.find(proj => proj.id == buttonId);

    setProject(currProject);

    if (currProject && currProject.todoInstance) {
        currProject.todoInstance.displayTodos();
    } 
}
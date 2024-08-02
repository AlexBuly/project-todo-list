import { getProject, setProject } from "./arrays";
import { getTodoContainer } from "./DOMElements";
import { LocalStorage } from "./addToStorage";

export function openProject(event, projArray, projectHead, projObj) {
    const todoBtn = document.querySelector(".new-todo");
    todoBtn.style.display = "block";
    const storage = LocalStorage();
    const storeProj = storage.getStorageProject();
    console.log("Project", storeProj);
    projectHead.textContent = projObj.title;
    let buttonId = event.target.id;
    console.log(projArray)
    const currProject = projArray.find(proj => proj.id == buttonId);
    console.log(currProject);

    setProject(currProject);

    const s = JSON.parse(localStorage.getItem("projects"));
    const display = s.map(item => item.todoInstance);
    console.log("Rt", display)
    //console.log("Rad", currProject.todoInstance);
    
   // console.log("Local", JSON.parse(localStorage.getItem("projects")));

    console.log(currProject);
    console.log("Project Array", projArray);

    if (currProject && currProject.todoInstance) {
        currProject.todoInstance.displayTodos();
    } 
}
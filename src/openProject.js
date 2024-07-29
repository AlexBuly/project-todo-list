import { getProject, setProject } from "./arrays";
import { getTodoContainer } from "./DOMElements";

export function openProject(event, projArray, projectHead, projObj) {
    projectHead.textContent = projObj.title;
    let buttonId = event.target.id;
    console.log(projArray)
    const currProject = projArray.find(proj => proj.id == buttonId);
    console.log(currProject);

    setProject(currProject);

    console.log("Local", JSON.parse(localStorage.getItem("projects")));

    console.log(currProject);

    if (currProject && currProject.todoInstance) {
        currProject.todoInstance.displayObjects();
    } 
}
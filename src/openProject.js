import { getProject, setProject } from "./arrays";


export function openProject(event, projArray, projectHead, projObj) {
    projectHead.textContent = projObj.title;
    let buttonId = event.target.id;
    console.log(projArray)
    const currProject = projArray.find(proj => proj.id == buttonId);

    setProject(currProject);

    console.log(currProject);

    if (currProject && currProject.todoInstance) {
        currProject.todoInstance.displayObjects();
    }
}
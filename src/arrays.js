
let projects;

export function getProject() {
    return projects;
}

export function AddToProject(projectTitle) {
    projects.push(projectTitle);
}

export function setProject(newProject) {
    projects = newProject;
}

let todos = []; 

export function getTodos() {
    return todos;
}
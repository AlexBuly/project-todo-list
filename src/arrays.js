
let projects;
let currentProject;

export function setCurrentProject(projectId) {
    currentProject = getProjectById(projectId);
}

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

export function getProjectById(id) {
    let projects = JSON.parse(localStorage.getItem('projects')) || [];
    return projects.find(project => project.id === id);
}
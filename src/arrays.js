let projects;
let currentProject;

export function setCurrentProject(projectId) {
    currentProject = getProjectById(projectId);
}

export function getProject() {
    return projects;
}

export function setProject(newProject) {
    projects = newProject;
}

export function getProjectById(id) {
    let projects = JSON.parse(localStorage.getItem('projects')) || [];
    return projects.find(project => project.id === id);
}
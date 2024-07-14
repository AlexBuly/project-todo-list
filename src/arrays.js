let projects = [];

export function getProject() {
    return projects;
}

export function AddProject(projectTitle) {
    projects.push(projectTitle);
}

export function setProjects(newProject) {
    projects = newProject;
}

let todos = []; 

export function getTodos() {
    return todos;
}

export function addTodo(value1, value2, valu3, valu4) {
    todos.push(value1, value2, valu3, valu4);
}

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

export function addTodo(value1, value2, valu3, valu4) {
    todos.push(value1, value2, valu3, valu4);
}

export function getTodos() {
    return todos;
}
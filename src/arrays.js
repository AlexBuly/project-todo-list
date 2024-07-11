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

export function addTodo(todoTitle, description, priority, dueDate) {
    todos.push(todoTitle, description, dueDate, priority);
}
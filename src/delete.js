import { getProject, setProject } from "./arrays";
import { LocalStorage } from "./addToStorage";
import Todo from "./todoItem";

export function deleteProject(btn, projectId) {
    btn.remove();
    const storage = LocalStorage();
    const projects = storage.getStorageProject();
    let project = projects.find(proj => proj.id === projectId);
    Object.keys(project).forEach(key => delete project[key]);
    storage.saveProjects(projects);
    return projects;  
}

export function deleteTodo(todoItem) {
    const storage = LocalStorage();
    let projects = storage.getStorageProject();
    let currentProject = getProject();

    if (currentProject) {
        currentProject.todo = currentProject.todo.filter(todo => todo.title !== todoItem);

        currentProject.todoInstance = new Todo(currentProject.todo);

        projects = projects.map(project => {
            if (project.id === currentProject.id) {
                return currentProject;
            }
            return project;
        });
        storage.saveProjects(projects);
        setProject(currentProject);
        currentProject.todoInstance.displayTodos();
    
    }
    
}
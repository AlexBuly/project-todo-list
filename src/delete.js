import { getProject } from "./arrays";
import { LocalStorage } from "./addToStorage";
export function deleteProject(btn, projectId) {
    btn.remove();
    const storage = LocalStorage();
    const projects = storage.getStorageProject();
    let project = projects.find(proj => proj.id === projectId);
    Object.keys(project).forEach(key => delete project[key]);
    localStorage.setItem("projects", JSON.stringify(projects));
    return projects;
    
}
export function deleteTodo(projectElement, todoItem) {
    projectElement = projectElement.remove();
    const projects = storage.getStorageProject();
    const currentProject = getProject();

    if (currentProject) {
        const proj = currentProject.todo.find(item => item.title == todoItem);
        //console.log(currentProject);
        //delete proj;
        //proj = {};
        localStorage.setItem("projects", JSON.stringify(proj));

        if (proj) {
            return proj;
        }
    }

    
}
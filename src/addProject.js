import Project from "./projects";
import Todo from "./todoItem";
import closeForm from "./closeForm";
import projectSide from "./projectSide";

// adds project to project lists 
export default function addProject(event) {
    event.preventDefault();
    projectSide();
    
    let projects = localStorage.getItem('project') ? 
    JSON.parse(localStorage.getItem('project')) 
    : [];
    
    const titleInput = document.getElementById("title");
    const projectElemnt = document.querySelector(".project-element");
    projects.push(titleInput.value);   
    
    const addProject = new Project(projects[projects.length - 1]);
    localStorage.setItem('project', JSON.stringify(projects));
    projectElemnt.textContent = addProject.projectName();
}
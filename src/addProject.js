import Project from "./projects";
import Todo from "./todoItem";
import closeForm from "./closeForm";
import projectSide from "./projectSide";

// adds project to project lists 
export default function addProject(event) {
    event.preventDefault();
    projectSide();
    const projects = [];
    const titleInput = document.getElementById("title");
    const formProject = document.querySelector(".project-form");
    const newProject = document.querySelector(".add-project");
    const projectElemnt = document.querySelector(".project-element");
    projects.push(titleInput.value);   
    const addProject = new Project(projects[projects.length - 1]);
    projectElemnt.textContent = addProject.projectName();
    closeForm(formProject, newProject);
}
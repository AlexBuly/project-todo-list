import Project from "./projects";

const projects = [];

const addProject = () => {
    // createForm();

    // post function pushes form value to project array 
    const project = new Project(projects);
    const card = document.createElement("div");
    card.textContent = project.projectName();
}
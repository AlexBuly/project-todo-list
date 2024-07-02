import DefaultLoading from "./defaultLoading";
import Project from "./projects";

// project form 

export default function projectForm() {
    const projectList = document.querySelector(".projects")
    const projectHead = document.querySelector(".project-head");
    const projects = [];

    const form = document.createElement("form");
    const fieldset = document.createElement("fieldset");
    const newProject = document.querySelector(".add-project");
    form.setAttribute("method", "post");
    form.setAttribute("action", "/");
    form.appendChild(fieldset);
    projectList.appendChild(form);
    const br = document.createElement("br");
    const titleInput = document.createElement("input");
    titleInput.type = "text"
    titleInput.id = "title";
    titleInput.name= "title";
    const tLabel = document.createElement("label");
    tLabel.htmlFor = "title";
    tLabel.textContent = "Title: ";
    fieldset.appendChild(tLabel)
    fieldset.appendChild(titleInput);
    fieldset.appendChild(br);

    const post = document.createElement("button");
    post.type = "sumbit";
    post.textContent = "Add project";
    fieldset.appendChild(post);

    const close = document.createElement("button");
    close.textContent = "Close";
    fieldset.appendChild(close);

    post.addEventListener("click", (event) => {
        event.preventDefault();
        projects.push(titleInput.value);
        const addProject = new Project(projects[projects.length - 1]);
        const projectElemnt = document.createElement("button");
        projectElemnt.classList.add("project-element");
        projectElemnt.textContent = addProject.projectName();
        projectList.appendChild(projectElemnt);
        form.remove();
        newProject.style.visibility = "visible";

        projectElemnt.addEventListener("click", () => {
            projectHead.textContent = addProject.projectName();
        });
    });

    close.addEventListener("click", (event) => {
        event.preventDefault();
        form.remove();
        newProject.style.visibility = "visible";
    })
}

// todo-item form 
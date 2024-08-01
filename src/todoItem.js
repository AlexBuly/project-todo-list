import { getTodoContainer, createButton, createDiv } from "./DOMElements";
import { deleteTodo } from "./delete";
import { getProject } from "./arrays";
import { LocalStorage } from "./addToStorage";

const project = getProject();
//const todo = project.todo;

export default function Todo(todoItems) {
    this.todoItems = todoItems;

    this.displayTodos = () => {
        const storage = LocalStorage();
        const storageProject = storage.getStorageProject();
        const todoContainer = getTodoContainer();
        todoContainer.replaceChildren();

        this.todoItems.forEach(item => {
            if (item.title) {
                const todoElement = createDiv("todo-element");
                todoContainer.appendChild(todoElement);

                const initialTitle = createDiv("element-title");
                todoElement.appendChild(initialTitle);

                const del = createButton("Delete");
                initialTitle.appendChild(del);

                const edit = createButton("Edit");
                initialTitle.appendChild(edit);

                const confimDel = document.createElement("div");
                confimDel.classList.add("confirm");

                const text = document.createElement("div");
                text.textContent = "Delete TODO?"
                confimDel.appendChild(text);
                confimDel.style.alignItems = "center";
                confimDel.style.fontWeight = "bold";

                const yes = document.createElement("button");
                yes.textContent = "Yes";
                confimDel.appendChild(yes);

                const no = document.createElement("button");
                no.textContent = "No";
                confimDel.appendChild(no);

                initialTitle.appendChild(confimDel);
                confimDel.style.paddingLeft = "1em";
                confimDel.style.display = "none";

                const head = document.createElement("h2");
                head.classList.add("todo-title")
                head.textContent = item.title;
                initialTitle.appendChild(head);

                const dueDateDiv = createDiv("dueDiv");
                dueDateDiv.textContent = ` Due: ${item.dueDate}`

                del.addEventListener("click", () => {
                   del.style.display = "none";
                   edit.style.display = "none";
                   confimDel.style.display = "flex";

                   yes.addEventListener("click", () => {
                        deleteTodo(item.title);
                        todoElement.remove();
                   })
                });

                initialTitle.appendChild(dueDateDiv);

                const toggleOpen = createButton("toggleOpen");
                toggleOpen.textContent = "+"
                initialTitle.appendChild(toggleOpen);

                const toggleClose = createButton("toggleClose");
                toggleClose.textContent = "-"
                initialTitle.appendChild(toggleClose);

                const description = createDiv("descriptionDiv");
                const priorityDiv = createDiv("priorityDiv");

                const bottomElements = createDiv("todo-content");
                todoElement.appendChild(bottomElements);
                
                description.textContent = `Description: ${item.description}`;
                priorityDiv.textContent = `Priority: ${item.priority}`;

                bottomElements.appendChild(description);
                bottomElements.appendChild(priorityDiv);

                bottomElements.style.display = "none";

                toggleOpen.addEventListener("click", () => {
                    bottomElements.style.display = "flex";
                });

                toggleClose.addEventListener("click", () => {
                    bottomElements.style.display = "none";
                })

                todoElement.style.backgroundColor =
                    priorityDiv.textContent == "Priority: High" ? "red" :
                    priorityDiv.textContent == "Priority: Medium" ? "yellow" :
                    priorityDiv.textContent == "Priority: Low" ? "green" : "";

                todoElement.style.color = 
                    priorityDiv.textContent == "Priority: High" || priorityDiv.textContent == "Priority: Low" ? "white" : "";

                console.log(storageProject);
            }
            

        });
    }
}






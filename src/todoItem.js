import { getTodoContainer, createButton, createDiv } from "./DOMElements";
import { deleteTodo } from "./delete";
import { getProject } from "./arrays";

const project = getProject();
//const todo = project.todo;

export default function Todo(todoItems) {
    this.todoItems = todoItems;

    this.displayTodos = () => {
        const todoContainer = getTodoContainer();
        todoContainer.replaceChildren();

        this.todoItems.forEach(item => {
            const todoElement = createDiv("todo-element");
            todoContainer.appendChild(todoElement);

            const initialTitle = createDiv("element-title");
            todoElement.appendChild(initialTitle);

            const del = createButton("Delete");
            initialTitle.appendChild(del);

            const edit = createButton("Edit");
            initialTitle.appendChild(edit);

            const head = document.createElement("h2");
            head.textContent = item.title;
            initialTitle.appendChild(head);

            const dueDateDiv = createDiv("dueDiv");
            dueDateDiv.textContent = ` Due: ${item.dueDate}`;

            del.addEventListener("click", () => {
                deleteTodo(todoElement, item.title);
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

        });
    }
}






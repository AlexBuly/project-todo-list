import { getTodoContainer, createButton, createDiv } from "./DOMElements";
import { getTodo } from "./addTodo";

export default function Todo(todoItems) {
    this.todoItems = todoItems;

    this.displayObjects = () => {
        const todoContainer = getTodoContainer();
        todoContainer.replaceChildren();

        this.todoItems.forEach(item => {
            const todoElement = createDiv("todo-element");
            todoContainer.appendChild(todoElement);

            const initialTitle = createDiv("element-title");
            todoElement.appendChild(initialTitle);

            const head = document.createElement("h2");
            head.textContent = item.title;
            initialTitle.appendChild(head);

            const toggleOpen = createButton("toggleOpen");
            toggleOpen.textContent = "+"
            initialTitle.appendChild(toggleOpen);

            const toggleClose = createButton("toggleClose");
            toggleClose.textContent = "-"
            initialTitle.appendChild(toggleClose);

            const description = createDiv("descriptionDiv");
            const dueDateDiv = createDiv("dueDiv");
            const priorityDiv = createDiv("priorityDiv");

            const bottomElements = createDiv("todo-content");
            todoElement.appendChild(bottomElements);
            
            description.textContent = item.description;
            dueDateDiv.textContent = item.dueDate;
            priorityDiv.textContent = item.priority;

            bottomElements.appendChild(description);
            bottomElements.appendChild(dueDateDiv);
            bottomElements.appendChild(priorityDiv);

            bottomElements.style.display = "none";

            toggleOpen.addEventListener("click", () => {
                bottomElements.style.display = "block";;
            });

            toggleClose.addEventListener("click", () => {
                bottomElements.style.display = "none";
            })

            todoElement.style.backgroundColor =
                priorityDiv.textContent == "High" ? "red" :
                priorityDiv.textContent == "Medium" ? "yellow" :
                priorityDiv.textContent == "Low" ? "green" : "";

            todoElement.style.color = 
                priorityDiv.textContent == "High" || priorityDiv.textContent == "Low" ? "white" : "";

        });
    }
}






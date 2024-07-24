import { getTodoContainer, createButton, createDiv } from "./DOMElements";
import { getTodo } from "./addTodo";

/*export default function Todo(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;

    this.todoTitle = () => {
        return `${this.title}`;
    }

    this.todoDes = () => {
        return `${this.description}`;
    }

    this.todoDue = () => {
        return `${this.dueDate}`;
    }

    this.todoPriority = () => {
        return `${this.priority}`;
    }
}*/ 

export default function Todo(objects) {
    this.objects = objects;

    this.displayObjects = () => {
        const todoContainer = getTodoContainer();
        todoContainer.replaceChildren();

        this.objects.forEach(obj => {
            const todoElement = createDiv("todo-element");
            todoContainer.appendChild(todoElement);

            const initialTitle = createDiv("element-title");
            todoElement.appendChild(initialTitle);

            const head = document.createElement("h2");
            head.textContent = obj.title;
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
            
            description.textContent = obj.description;
            dueDateDiv.textContent = obj.dueDate;
            priorityDiv.textContent = obj.priority;

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

            if (priorityDiv.textContent == "High") {
                todoElement.style.backgroundColor = "red";
                todoElement.style.color = "white"
            } else if (priorityDiv.textContent == "Medium") {
                todoElement.style.backgroundColor = "yellow";    
            } else if (priorityDiv.textContent == "Low") {
                todoElement.style.backgroundColor = "green";
                todoElement.style.color = "white";
            }

        });
    }
}






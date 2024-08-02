import { getTodoContainer, createButton, createDiv, createFieldset, createForm } from "./DOMElements";
import { deleteTodo } from "./delete";
import { getProject } from "./arrays";
import { LocalStorage } from "./addToStorage";
import { editTodoForm } from "./edit";

const project = getProject();


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

                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.name = "checklist";
                checkbox.id = "checklist";
                checkbox.checked = item.completed || false;
                initialTitle.appendChild(checkbox);

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

                  no.addEventListener("click", () => {
                    del.style.display = "block";
                    edit.style.display = "block";
                    confimDel.style.display = "none";

                  })
                });

                initialTitle.appendChild(dueDateDiv);

                const toggleOpen = createButton("toggleOpen");
                toggleOpen.textContent = "+"
                initialTitle.appendChild(toggleOpen);

                const toggleClose = createButton("toggleClose");
                toggleClose.textContent = "-"
                initialTitle.appendChild(toggleClose);

                const priorityDiv = createDiv("priorityDiv");

                const bottomElements = createDiv("todo-content");
                todoElement.appendChild(bottomElements);
                
                if (item.description) {
                    const description = createDiv("descriptionDiv");
                    description.textContent = `Description: ${item.description}`;
                    bottomElements.appendChild(description);
                }
                
                priorityDiv.textContent = `Priority: ${item.priority}`;

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

                checkbox.addEventListener("click", () => {
                    item.completed = checkbox.checked;
                    const storage = LocalStorage();
                    storage.updateTodoItem(item);
                })



                edit.addEventListener("click", () => {
                    todoElement.style.display = "none";
                    editTodoForm(item.title);
                 });
 

                console.log(storageProject);
            }
            

        });
    }
}






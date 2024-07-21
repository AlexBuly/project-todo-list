import { getProject, setTodos } from "./arrays";
import Todo from "./todoItem";
import { projectObj, getArray, getObject, setTodo } from "./addProject";
import { getTodoContainer, createDiv, createButton } from "./DOMElements";

export default function createTodo() {
    const todoInput = document.querySelector("#todoTitle").value;
    const desInput = document.querySelector("#description").value;
    const dueDate = document.querySelector("#due-date").value;
    const priority = document.querySelector("#priority").value;

    const projects = getProject();


    const todoObj = {
        title: todoInput,
        description: desInput,
        dueDate: dueDate,
        priority: priority 
    }

    const todoArray = projects.todo;

    todoArray.push(todoObj); 
    
    localStorage.setItem('items', JSON.stringify(todoArray));

    // so that todos can inserted into that project 
    const newTodo = new Todo(todoObj.title, todoObj.description, todoObj.dueDate, todoObj.priority);

    //setTodos(newTodo);

    const todoContainer = getTodoContainer();

    const todoElement = createDiv("todo-element");
    todoContainer.appendChild(todoElement);

    const initialTitle = createDiv("element-title");
    todoElement.appendChild(initialTitle);

    const head = document.createElement("h2");
    head.textContent = newTodo.todoTitle();
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
    
    description.textContent = newTodo.todoDes();
    dueDateDiv.textContent = newTodo.todoDue();
    priorityDiv.textContent = newTodo.todoPriority();

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


    if (priority == "High") {
        todoElement.style.backgroundColor = "red";
        todoElement.style.color = "white"
    } else if (priority == "Medium") {
        todoElement.style.backgroundColor = "yellow";    
    } else if (priority == "Low") {
        todoElement.style.backgroundColor = "green";
        todoElement.style.color = "white";
    }



    //console.log(newTodo);

    //console.log(todoArray);
    
    console.log(getProject());

    //console.log(projectObj());
}
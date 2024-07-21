import { getProject } from "./arrays";
import Todo from "./todoItem";
import { projectObj, getArray, getObject, setTodo } from "./addProject";
import { getTodoContainer, createDiv, createButton } from "./DOMElements";

let newTodo

export default function addTodo() {
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
    newTodo = new Todo(todoObj.title, todoObj.description, todoObj.dueDate, todoObj.priority);

    //console.log(newTodo);

    //console.log(todoArray);
    
    console.log(getProject());

    //console.log(projectObj());
}

export function getTodo() {
    return newTodo;
}
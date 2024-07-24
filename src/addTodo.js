import { getProject, setProject } from "./arrays";
import Todo from "./todoItem";
import { projectObj, getArray, getObject, setTodo } from "./addProject";
import { getTodoContainer, createDiv, createButton } from "./DOMElements";

let newTodo;
let todoArray;

export default function addTodo() {
    const todoInput = document.querySelector("#todoTitle").value;
    const desInput = document.querySelector("#description").value;
    const dueDate = document.querySelector("#due-date").value;
    const priority = document.querySelector("#priority").value;

    const currentProject = getProject();

    const todoObj = {
        title: todoInput,
        description: desInput,
        dueDate: dueDate,
        priority: priority 
    }

    currentProject.todo.push(todoObj); // Add the new todo to the current project

    newTodo = new Todo(currentProject.todo); // Create a new Todo instance with updated todos
    
    //localStorage.setItem('items', JSON.stringify(todoArray));

    // so that todos can inserted into that project 
    console.log(newTodo);

    setProject(currentProject); // Update the current project in the list of projects

    newTodo.displayObjects(); // Display the updated list of todos

    //console.log(todoArray);
    
    console.log(currentProject);

    return newTodo;
}

export function getTodo() {
    return newTodo;
}

export function getTodoArray() {
    return todoArray;
}
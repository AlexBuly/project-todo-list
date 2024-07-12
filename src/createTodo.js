import { getTodos, addTodo } from "./arrays";
import { getProject } from "./arrays";
import Todo from "./todoItem";
import { projectObj } from "./addProject";

export default function createTodo() {
    const todoInput = document.querySelector("#todoTitle").value;
    const desInput = document.querySelector("#description").value;
    const dueDate = document.querySelector("#due-date").value;
    const priority = document.querySelector("#priority").value;

    const todoArray = getTodos();

    addTodo(todoInput, desInput, dueDate, priority);

    const newTodo = new Todo(todoArray[todoArray.length - 4], todoArray[todoArray.length - 3], todoArray[todoArray.length -2], todoArray[todoArray.length -1]);
    
    console.log(newTodo);
    
    console.log(getProject());

    console.log(projectObj());
}
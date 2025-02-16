import { getProject, setProject } from "./arrays";
import Todo from "./todoItem";
import { LocalStorage } from "./addToStorage";

export default function addTodo() {
    let newTodo;
    const todoInput = document.querySelector("#todoTitle").value;
    const desInput = document.querySelector("#description").value;
    const dueDate = document.querySelector("#due-date").value;
    const priority = document.querySelector("#priority").value;

    const storage = LocalStorage();

    const currentProject = getProject();

    const todoObj = {
        title: todoInput,
        description: desInput,
        dueDate: dueDate,
        priority: priority,
    }

    currentProject.todo.push(todoObj); // Add the new todo to the current project
    storage.storageTodo(currentProject.id, todoObj);


    newTodo = new Todo(currentProject.todo); // Create a new Todo instance with updated todos

    setProject(currentProject); // Update the current project in the list of projects
    
    newTodo.displayTodos(); // Display the updated list of todos

    return newTodo;
}

import DefaultLoading from "./defaultLoading";
import { todoForm } from "./forms";
import Todo from "./todoItem";

// Adds todo item 
export default function AddTodo() {
    const titleArray = [];
    const desArray = [];
    const dateArray = [];
    const pArray = [];

    const todoViewing = document.querySelector(".todos");
    const todoForm = document.querySelector(".todo-form");
    const titleInput = document.getElementById("titleTodo");
    const description = document.getElementById("description");
    const dueDate = document.getElementById("due-date");
    const priority = document.getElementById("priority");

    titleArray.push(titleInput.value);
    desArray.push(description.value);
    dateArray.push(dueDate.value);
    pArray.push(priority.value);

   const addTodo = new Todo(titleArray[titleArray.length -1 ], desArray[desArray.length -1], dateArray[dateArray.length -1], pArray[pArray.length - 1]);
   const todoElement = document.createElement("div");
   todoElement.classList.add("todo-element");
   if (priority.value === "Low") {
    todoElement.style.backgroundColor = "green";
   } else if (priority.value === "Medium") {
    todoElement.style.backgroundColor = "yellow";
   } else if (priority.value === "High") {
    todoElement.style.backgroundColor = "red";
   }
   todoViewing.appendChild(todoElement);
   
   const todoTitle = document.createElement("h2");
   todoTitle.textContent = addTodo.todoTitle();
   const todoDescr = document.createElement("p");
   todoDescr.textContent = addTodo.todoDes();
   const date = document.createElement("p");
   date.textContent = addTodo.todoDue();
   const pri = document.createElement("p");
   pri.textContent = addTodo.todoPriority();
   
    todoElement.appendChild(todoTitle);
    todoElement.appendChild(todoDescr);
    todoElement.appendChild(date);
    todoElement.appendChild(pri);

    todoForm.remove();
    //const newTodo = document.querySelector(".todo-btn");
    //newTodo.style.visibility = "visible";



}
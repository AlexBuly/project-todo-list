import DefaultLoading from "./defaultLoading";
import  { todoForm } from "./forms";
import Todo from "./todoItem";

// Adds todo item 
export function todoElement() {
    const todoViewing = document.querySelector(".todos");
    
    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo-element");
    todoViewing.appendChild(todoContainer);

    const todoTitle = document.createElement("h2");
    const todoDescr = document.createElement("p");
    const date = document.createElement("p");
    const pri = document.createElement("p");

    todoContainer.appendChild(todoTitle);
    todoContainer.appendChild(todoDescr);
    todoContainer.appendChild(date);
    todoContainer.appendChild(pri);

    const newProject = document.createElement("button");
    newProject.classList.add("create-project");
    newProject.textContent = "New Project"
    todoViewing.appendChild(newProject); 

    newProject.addEventListener("click", () => {
        todoForm();
        newProject.style.visibility = "hidden";
    });
   
}

export function AddTodo() {
    todoElement();
    let titleArray = localStorage.getItem('titleVal') ? 
    JSON.parse(localStorage.getItem('titleVal')) 
    : [];
    
    let desArray = localStorage.getItem('desVal') ? 
    JSON.parse(localStorage.getItem('desVal'))
    : [];
    
    let dateArray = localStorage.getItem('dateVal') ?
    JSON.parse(localStorage.getItem('dateVal')) :
    [];

    let pArray = localStorage.getItem('dateArray') ?
    JSON.parse(localStorage.getItem('dateArray')) :
    [];

    const todoContainer = document.querySelector(".todo-element");
    const todoForm = document.querySelector(".todo-form");
    const titleInput = document.getElementById("titleTodo");
    const description = document.getElementById("description");
    const dueDate = document.getElementById("due-date");
    const priority = document.getElementById("priority");

    // pushes values to array
    titleArray.push(titleInput.value);
    desArray.push(description.value);
    dateArray.push(dueDate.value);
    pArray.push(priority.value);

    localStorage.setItem('titleVal', JSON.stringify(titleArray));
    localStorage.setItem('desVal', JSON.stringify(desArray));
    localStorage.setItem('dateVal', JSON.stringify(dateArray));
    localStorage.setItem('pVal', JSON.stringify(pArray));

   const addTodo = new Todo(titleArray[titleArray.length -1 ], desArray[desArray.length -1], dateArray[dateArray.length -1], pArray[pArray.length - 1]);
   
   if (priority.value === "Low") {
    todoContainer.style.backgroundColor = "green";
   } else if (priority.value === "Medium") {
    todoContainer.style.backgroundColor = "yellow";
   } else if (priority.value === "High") {
    todoContainer.style.backgroundColor = "red";
   }

   const todoTitle = document.createElement("h2");
   const todoDescr = document.createElement("p");
   const date = document.createElement("p");
   const pri = document.createElement("p");
    
   todoTitle.textContent = addTodo.todoTitle();
   todoDescr.textContent = addTodo.todoDes();
   date.textContent = addTodo.todoDue();
   pri.textContent = addTodo.todoPriority();

    todoForm.remove();
}
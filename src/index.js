console.log("Test");
import './style.css';
import DefaultLoading from './defaultLoading';
import { setProject } from './arrays';

DefaultLoading();

const array = [];
setProject(array);


//localStorage.clear();

//console.log(projectObj());

/*

Modules called in index.js 
 defaultLoading();
 On project clicking button, 
  function Project(title) {
    this.title = title;
  }

At least 2 modules, todoItems/projects and DOMContent

Main constructor/factory should have a title argument

Within that, create additional todo-item constructor
with title, description, and dueDate arguments 

const todoItem = new Todo(title, description, dueDate, priority)

localStorage.setItem("todo-item", todoItem.toString())

Update project name and todo-items 

Delete projects/todo-items 

Uses localStorage to save on computer 
  // Object.assign()

 */
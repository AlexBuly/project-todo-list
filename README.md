# project-todo-list

This is Project: Todo List. In this project, users can create todos list and projects for the todo lists, delete them and edit them. 

First, webpack was installed and setup. 

Next, 2 constructor functions were added. One for projects and one for todos. The todo constructor takes in an argument of a todoItem object. Using that object, it calls a method to pass key/values pairs for todo properties. The todo properties are title, description, due date and priority. 

For the projects constuctor, it takes in object keys as arguments and has method which displays the project name. The properties of projects are title, todos, and, index. 

Next a form for adding new todos and projects was added. When the form is submitted, it calls the functions addProject and addTodo. 

For addProject, the function creates an initially blank project array without any todos. An object is create which uses the project form values as the object values. An id key/value pair is added so the projects can be unique. Also within the object is todoInstance. This key/value pair is used to keep related projects/todos together. 

For addTodo, a variable is first assign to a function that return the current project array. An object is created whicj uses todo form values as the object values. The todo object is then pushed into the current project's todos. The displayTodo function is then called onto the instance of the Todo constructor to display the todo within the project. 

Next, a function was added to display the current projects todos when the project element is clicked. It does this by finding a project using its id, setting the current project as that project, and returning the projects todos by calling the project's todoInstance displayTodo method.

When a project or todo is created, it is saved to local storage. This means that the projects/todos will be stored locally on a users computer and can only be viewed from that device.This localStorage module also includes a method to display projects, add them to localStorage, save values to local storage, and updates values in local storage.

In separate modules, there are functions that delete and edit projects/todos. For editing projects, thr current project from local storage is found. If the project exists, the current title becomes the new title set. For todos the same thing is done however, a new Todo instance must be called because functions cannot not stored in local storage. 

Finally, a checklist was added and the state of checked or unchecked is added to local storage. 
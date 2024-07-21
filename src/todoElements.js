import { getObject } from "./addProject";
import addTodo from "./addTodo";


//let object = getObject();

export function displayTodos() {
    for (let i = 0; i < object.lengh; i++) {
        addTodo();
    }
}
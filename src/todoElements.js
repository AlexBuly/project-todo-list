import { getObject } from "./addProject";
import createTodo from "./createTodo";


//let object = getObject();

export function displayTodos() {
    for (let i = 0; i < object.lengh; i++) {
        createTodo();
    }
}
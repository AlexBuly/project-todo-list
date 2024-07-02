export default function Todo(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;

    this.todoTitle = () => {
        return `${this.title}`;
    }

    this.todoDes = () => {
        return `${this.description}`;
    }

    this.todoDo = () => {
        return `${this.dueDate}`;
    }

    this.priority = () => {
        return `${this.priority}`;
    }
}
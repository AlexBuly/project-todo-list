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

    this.todoDue = () => {
        return `${this.dueDate}`;
    }

    this.todoPriority = () => {
        return `${this.priority}`;
    }
}
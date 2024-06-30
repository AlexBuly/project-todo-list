export default function Todo(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;

    this.todoItems = () => {
        return `${this.title}, ${this.description}, ${this.dueDate}, ${this.priority}`;
    }
}
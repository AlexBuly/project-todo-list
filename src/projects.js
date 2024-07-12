export default function Project(title, todos) {
    this.title = title;
    this.todos = todos;

    this.projectName = () => {
        return `${this.title}`;
    }
}
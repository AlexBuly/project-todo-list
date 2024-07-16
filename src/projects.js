export default function Project(title, todos, index) {
    this.title = title;
    this.todos = todos;
    this.index = index;

    this.projectName = () => {
        return `${this.title}`;
    }
}
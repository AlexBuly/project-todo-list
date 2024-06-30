export default function Project(title) {
    this.title = title;

    this.projectName = () => {
        return `${this.title}`;
    }
}
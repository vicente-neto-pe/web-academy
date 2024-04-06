export class AppContext {
    task = null;
    setTask = (task) => {
        this.task = task;
    };
    getTask = () => {
        const task = this.task;
        this.task = null;
        return task;
    };
}

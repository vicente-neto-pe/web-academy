export class List {
    tasks = [];
    taskId = 0;
    addTask = (task) => {
        this.tasks.push(task);
        this.taskId++;
        task.setId(this.taskId.toString());
    };
    deleteTask = (taskToDelete) => {
        this.tasks = this.tasks.filter(task => task.getId() !== taskToDelete.getId());
    };
    editTask = (oldTaskId, newTask) => {
        console.log("editou");
        const oldTask = this.tasks.find(task => task.getId() === oldTaskId);
        if (!oldTask)
            return;
        const oldTaskIndex = this.tasks.findIndex(task => task.getId() === oldTask.getId());
        newTask.setId(oldTask.getId());
        this.tasks[oldTaskIndex] = newTask;
    };
    getTasks = () => {
        return this.tasks;
    };
}

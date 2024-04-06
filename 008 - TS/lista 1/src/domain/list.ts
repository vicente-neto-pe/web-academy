import { Task } from "./task.js";

export class List{
    private tasks:Task[]=[];
    private taskId = 0

    addTask=(task:Task)=>{
        this.tasks.push(task);
        this.taskId++;
        task.setId(this.taskId.toString());
    }

    deleteTask=(taskToDelete:Task)=>{
        this.tasks = this.tasks.filter(task=>task.getId() !== taskToDelete.getId())
    }

    editTask=(oldTaskId:string, newTask:Task)=>{
        console.log("editou")
        const oldTask = this.tasks.find(task=>task.getId()===oldTaskId);
        if(!oldTask) return;
        const oldTaskIndex:number = this.tasks.findIndex(task=>task.getId()===oldTask.getId());
        newTask.setId(oldTask.getId());
        this.tasks[oldTaskIndex] = newTask;
    }

    getTasks=()=>{
        return this.tasks;
    }

}
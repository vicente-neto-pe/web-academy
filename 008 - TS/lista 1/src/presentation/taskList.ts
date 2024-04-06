import { Task } from "../domain/task.js";
import { myList } from "../main.js";
import { Card } from "./card.js";

export class TaskList {
  update = () => {
    const taskList: HTMLUListElement = document.getElementsByTagName("ul")[0];
    taskList.innerHTML = "";
    myList.getTasks().forEach((task:Task) => {
      new Card(task, myList);
    });
  }
}
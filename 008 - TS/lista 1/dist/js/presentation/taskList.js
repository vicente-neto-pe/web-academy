import { myList } from "../main.js";
import { Card } from "./card.js";
export class TaskList {
    update = () => {
        const taskList = document.getElementsByTagName("ul")[0];
        taskList.innerHTML = "";
        myList.getTasks().forEach((task) => {
            new Card(task, myList);
        });
    };
}

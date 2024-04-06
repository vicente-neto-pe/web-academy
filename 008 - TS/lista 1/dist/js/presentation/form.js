import { Task } from "../domain/task";
import { myList, taskList } from "../main";
export class Form {
    constructor() {
        const form = document.getElementById("addform");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const deadlineInput = document.getElementById("deadline");
            const titleInput = document.getElementById("title");
            const descriptionInput = document.getElementById("description");
            if (deadlineInput && titleInput && descriptionInput) {
                const deadline = deadlineInput.value;
                const title = titleInput.value;
                const description = descriptionInput.value;
                const newTask = new Task(title, description, deadline);
                myList.addTask(newTask);
                taskList.update();
                deadlineInput.value = "";
                titleInput.value = "";
                descriptionInput.value = "";
            }
        });
    }
}

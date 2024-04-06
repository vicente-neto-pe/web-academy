import { Task } from "../domain/task";
import { myList, taskList } from "../main";

export class Form {
  constructor() {
    const form: HTMLElement = document.getElementById("addform")!;
    form.addEventListener("submit", (e: Event) => {
      e.preventDefault();
      const deadlineInput = document.getElementById("deadline") as HTMLInputElement;
      const titleInput = document.getElementById("title") as HTMLInputElement;
      const descriptionInput = document.getElementById("description") as HTMLInputElement;

      if (deadlineInput && titleInput && descriptionInput) {
        const deadline: string = deadlineInput.value;
        const title: string = titleInput.value;
        const description: string = descriptionInput.value;

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

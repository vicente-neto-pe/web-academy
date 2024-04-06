import { List } from "../domain/list";
import { Task } from "../domain/task";
import { taskList } from "../main";

export class Card {
  private taskList: List;
  private task: Task;
  private taskListElement: HTMLUListElement = document.querySelector("ul")!;
  private cardElement = document.createElement("li");

  constructor(task: Task, myList: List) {
    this.task = task;
    this.taskList = myList;
    this.buildCard();
  }

  buildCard() {
    this.cardElement.id = this.task.getId();
    this.cardElement.innerHTML = `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${this.task.getTitle()}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Criação: ${this.task.getCreatedAt()}</h6>
          <h6 class="card-subtitle mb-2 text-muted">Prazo: ${this.task.getDeadLine()}</h6>
          <p class="card-text">${this.task.getDescription()}</p>
          <button class="btn btn-primary deleteButton" data-task-id="${this.task.getId()}">Apagar</button>
          <button class="btn btn-outline-primary editButton" data-bs-toggle="modal" data-bs-target="#exampleModal" data-task-id="${this.task.getId()}">Editar</button>
        </div>
      </div>`;
    this.taskListElement.appendChild(this.cardElement);

    const deleteButton = this.cardElement.querySelector(`.deleteButton[data-task-id="${this.task.getId()}"]`) as HTMLButtonElement;
    deleteButton.addEventListener("click", () => {
      this.taskList.deleteTask(this.task);
      taskList.update();
    });

    const editButton = this.cardElement.querySelector(`.editButton[data-task-id="${this.task.getId()}"]`) as HTMLButtonElement;
    editButton.addEventListener("click", () => this.openAndFillModalWithTaskInfo());
  }

  openAndFillModalWithTaskInfo() {
    const exampleModal = document.getElementById("exampleModal")!;
    const modalBodyInput = exampleModal.querySelector<HTMLInputElement>("#editform #title")!;
    const modalBodyInputDescription = exampleModal.querySelector<HTMLInputElement>("#editform #description")!;
    const modalBodyInputDeadLine = exampleModal.querySelector<HTMLInputElement>("#editform #deadline")!;
    
    modalBodyInput.value = this.task.getTitle();
    modalBodyInputDescription.value = this.task.getDescription();
    modalBodyInputDeadLine.value = this.task.getDeadLine();

    const saveButton = exampleModal.querySelector<HTMLButtonElement>("#saveButton")!;
    saveButton.dataset.taskId = this.task.getId();
    saveButton.addEventListener("click", () => this.saveModalInfo(saveButton));
  }

  saveModalInfo(saveButton: HTMLButtonElement) {
    const modalFieldsValues = this.getModalFields();
    const oldTaskId = saveButton.getAttribute("data-task-id");
    if (modalFieldsValues && oldTaskId) {
      const newTask = new Task(modalFieldsValues.taskTitle, modalFieldsValues.taskDescription, modalFieldsValues.taskDeadLine);
      this.taskList.editTask(oldTaskId, newTask);
      taskList.update();
    }
  }

  getModalFields() {
    const exampleModal = document.getElementById("exampleModal")!;
    const modalBodyTitleInput = exampleModal.querySelector<HTMLInputElement>("#editform #title")!;
    const modalBodyInputDescription = exampleModal.querySelector<HTMLInputElement>("#editform #description")!;
    const modalBodyInputDeadLine = exampleModal.querySelector<HTMLInputElement>("#editform #deadline")!;
    
    if (modalBodyTitleInput && modalBodyInputDescription && modalBodyInputDeadLine) {
      return {
        taskTitle: modalBodyTitleInput.value,
        taskDescription: modalBodyInputDescription.value,
        taskDeadLine: modalBodyInputDeadLine.value
      };
    }
    return null;
  }
}

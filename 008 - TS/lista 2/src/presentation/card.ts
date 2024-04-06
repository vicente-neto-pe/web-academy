import { Student } from "../domain/student.js";
import { classroom } from "../main.js";
import { StudentList } from "./studentList.js";

export class Card {
  private student: Student;
  private studentElement = document.querySelector<HTMLUListElement>("#student-list");
  private newCard: HTMLLIElement = document.createElement("li");

  constructor(student: Student) {
    this.student = student;
    this.render();
  }

  render = () => {
    if (!this.studentElement) return;
    this.newCard.id = this.student.getId();
    this.newCard.innerHTML = `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${this.student.getName()}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Idade: ${this.student.getAge()}</h6>
          <h6 class="card-subtitle mb-2 text-muted">altura: ${this.student.getHeight()}</h6>
          <h6 class="card-subtitle mb-2 text-muted">peso: ${this.student.getWeight()}</h6>
          <button  class="btn btn-primary deleteButton" data-student-id="${this.student.getId()}">Apagar</button>
          <button  class="btn btn-outline-primary editButton" data-bs-toggle="modal" data-bs-target="#exampleModal" data-student-id="${this.student.getId()}">Editar</button>
        </div>
      </div>`;
    this.studentElement.appendChild(this.newCard);
    this.addDeleteEvent();
    this.addEditEvent();
  };

  addEditEvent = () => {
    const editButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(`.editButton[data-student-id="${this.student.getId()}"]`);
    editButtons.forEach((button: HTMLButtonElement) => {
      button.addEventListener("click", () => {
        const modalBodyInputName = document?.querySelector("#editname") as HTMLInputElement | null;
        const modalBodyInputAge = document?.querySelector("#editage") as HTMLInputElement | null;
        const modalBodyInputHeight = document?.querySelector("#editheight") as HTMLInputElement | null;
        const modalBodyInputWeight = document?.querySelector("#editwheigth") as HTMLInputElement | null;
        if (modalBodyInputName && modalBodyInputAge && modalBodyInputHeight && modalBodyInputWeight) {
          modalBodyInputName.value = this.student.getName();
          modalBodyInputAge.value = this.student.getAge().toString();
          modalBodyInputHeight.value = this.student.getHeight().toString();
          modalBodyInputWeight.value = this.student.getWeight().toString();
        }
        this.addSaveEventToTheModalButton();
      });
    });
  }

  addDeleteEvent = () => {
    const deleteButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(`.deleteButton[data-student-id="${this.student.getId()}"]`);
    deleteButtons.forEach((button: HTMLButtonElement) => {
      button.addEventListener("click", () => {
        if (this.student.getId()) {
          classroom.removeStudent(this.student.getId());
          StudentList.update();
        }
      });
    });
  };


  addSaveEventToTheModalButton = () => {
    const saveButton = document.getElementById("saveButton") as HTMLButtonElement | null;
    if(saveButton) {
      saveButton.addEventListener("click", () => {
        const modalBodyInputName = document?.querySelector("#editname") as HTMLInputElement | null;
        const modalBodyInputAge = document?.querySelector("#editage") as HTMLInputElement | null;
        const modalBodyInputHeight = document?.querySelector("#editheight") as HTMLInputElement | null;
        const modalBodyInputWeight = document?.querySelector("#editwheigth") as HTMLInputElement | null;
        if (modalBodyInputName && modalBodyInputAge && modalBodyInputHeight && modalBodyInputWeight) {
          console.log("e");
          const newName = modalBodyInputName.value;
          const newAge = parseInt(modalBodyInputAge.value);
          const newHeight = parseInt(modalBodyInputHeight.value);
          const newWeight = parseInt(modalBodyInputWeight.value);
          const newstudent = new Student(newName, newAge, newWeight, newHeight);
          classroom.editStudent(this.student.getId(), newstudent);
          StudentList.update();
        }
      });
    }
  }


}

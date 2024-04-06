import { Student } from "../domain/student.js";
import { classroom, statistics } from "../main.js";
import { StudentList } from "./studentList.js";

export class Studentform {
  private currentStudent: Student | null = null;
  private form = document.querySelector("#addStudentForm");

  constructor() {
    if (this.form) {
      this.form.addEventListener("submit", this.handleSubmit);
      this.form.querySelector("#random")?.addEventListener("click", this.generateRandomStudent);
    }
  }

  handleSubmit = (e: Event) => {
    if (!this.form) return;
    e.preventDefault();
    const name = (this.form.querySelector("#name") as HTMLInputElement).value;
    const age = parseInt((this.form.querySelector("#age") as HTMLInputElement).value);
    const wheigth = parseInt((this.form.querySelector("#wheigth") as HTMLInputElement).value);
    const height = parseInt((this.form.querySelector("#height") as HTMLInputElement).value);
    this.currentStudent = new Student(name, age, height, wheigth);
    classroom.addStudent(this.currentStudent);
    statistics.update();
    StudentList.update();
  };

  async generateRandomStudent() {
    if (!this.form) return;
    const data = await fetch("https://randomuser.me/api/").then((response) => response.json());
    const name = data.results[0].name.first + " " + data.results[0].name.last;
    const age = data.results[0].dob.age;
    const wheigth = Math.floor(Math.random() * 100) + 50;
    const height = Math.floor(Math.random() * 100) + 150;
    const student = new Student(name, age, height, wheigth);
    (this.form.querySelector("#name") as HTMLInputElement).value = name;
    (this.form.querySelector("#age") as HTMLInputElement).value = age;
    (this.form.querySelector("#wheigth") as HTMLInputElement).value = wheigth.toString();
    (this.form.querySelector("#height") as HTMLInputElement).value = height.toString();
    this.currentStudent = student;
  }
}

import { Student } from "../domain/student.js";
import { classroom } from "../main.js";
import { Card } from "./card.js";

export class StudentList {

  static update = () => {
    const studentList: HTMLUListElement = document.getElementsByTagName("ul")[0];
    studentList.innerHTML = "";
    classroom.getstudents().forEach((student:Student) => {
      new Card(student);
    });
  }
}
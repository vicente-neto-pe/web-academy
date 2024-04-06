import { classroom } from "../main.js";
import { Card } from "./card.js";
export class StudentList {
    static update = () => {
        const studentList = document.getElementsByTagName("ul")[0];
        studentList.innerHTML = "";
        classroom.getstudents().forEach((student) => {
            new Card(student);
        });
    };
}

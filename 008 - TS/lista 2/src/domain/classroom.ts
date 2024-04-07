import { statistics } from "../main.js";
import { Student } from "./student.js";

export class Classroom {
  private id: number = 0;
  private classroomName: string;
  private students: Student[] = [];

  constructor(classroomName: string) {
    this.classroomName = classroomName;
  }

  setId = (id: number): void => {
    this.id = id;
  };

  getId = () => {
    return this.id;
  };

  getClassroomName = () => {
    return this.classroomName;
  };

  getStudentsQuantity = () => {
    return this.students.length;
  };

  addStudent = (student: Student) => {
    student.setId((this.id + 1).toString());
    this.id++;
    this.students.push(student);
  };

  removeStudent = (id: string) => {
    this.students = this.students.filter((Student) => {
      return Student.getId() !== id;
    });
    statistics.update();
  };

  editStudent = (id: string, newStudent: Student) => {
    const oldStudent = this.students.find((Student) => {
      return Student.getId() === id;
    });
    if (!oldStudent) return;
    const oldStudentIndex = this.students.findIndex((Student) => {
      return Student.getId() === oldStudent.getId();
    });
    newStudent.setId(oldStudent.getId());
    this.students[oldStudentIndex] = newStudent;
    statistics.update();
  };

  getstudents = () => {
    return this.students;
  };

  getAverageAge = () => {
    let mean = 0;
    this.students.forEach((Student) => {
      mean += Student.getAge();
    });
    return Math.round(mean / this.students.length);
  };

  getAverageHeight = () => {
    let mean = 0;
    this.students.forEach((Student) => {
      mean += Student.getHeight();
    });
    return Math.round(mean / this.students.length);
  };

  getAverageWeight = () => {
    let mean = 0;
    this.students.forEach((Student) => {
      mean += Student.getWeight();
    });
    return Math.round(mean / this.students.length);
  };
}

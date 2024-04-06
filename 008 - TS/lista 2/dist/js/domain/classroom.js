import { statistics } from "../main.js";
export class Classroom {
    id = 0;
    classroomName;
    students = [];
    constructor(classroomName) {
        this.classroomName = classroomName;
    }
    setId = (id) => {
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
    addStudent = (student) => {
        student.setId((this.id + 1).toString());
        this.id++;
        this.students.push(student);
    };
    removeStudent = (id) => {
        this.students = this.students.filter((Student) => {
            return Student.getId() !== id;
        });
        statistics.update();
    };
    editStudent = (id, newStudent) => {
        const oldStudent = this.students.find((Student) => {
            return Student.getId() === id;
        });
        if (!oldStudent)
            return;
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
        return mean / this.students.length;
    };
    getAverageHeight = () => {
        let mean = 0;
        this.students.forEach((Student) => {
            mean += Student.getHeight();
        });
        return mean / this.students.length;
    };
    getAverageWeight = () => {
        let mean = 0;
        this.students.forEach((Student) => {
            mean += Student.getWeight();
        });
        return mean / this.students.length;
    };
}

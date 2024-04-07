import { Classroom } from "./domain/classroom.js";
import { Statistics } from "./presentation/statistics.js";
import { Studentform } from "./presentation/studentForm.js";
export const classroom = new Classroom("Turma 1");
export const studentForm = new Studentform();
export const statistics = new Statistics();

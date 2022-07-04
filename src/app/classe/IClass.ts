import { IStudent } from "../student/IStudent";
import { ITeacher } from "../teacher/ITeacher";

export interface IClass {
	id: number,
	name: string,
	teacher: ITeacher,
	active: boolean,
	students: IStudent[]
}
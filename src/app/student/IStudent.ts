import { IClass } from "../classe/IClass";

export interface IStudent {
	id?: number,
	name: string,
	class: IClass,
	active: boolean,
	p1?: number,
	p2?: number,
	p3?: number,
	pFinal?: number,
	approved: boolean
}
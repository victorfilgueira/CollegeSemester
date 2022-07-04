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

export const studentsData: IStudent[] = [
	{
        "id": 1,
        "name": "Victor",
        "class": {
			"id": 1,
			"name": "Cálculo",
			"teacher": {
				"id": 1,
				"name": "Robson",
				"active": true
			},
			"active": true,
			"students": []
		},
        "active": true,
        "p1": 5.0,
        "p2": 6.0,
        "p3": 7.0,
        "pFinal": 5.0,
        "approved": false
    },
    {
        "id": 2,
        "name": "Caio",
        "class": {
			"id": 1,
			"name": "Cálculo",
			"teacher": {
				"id": 1,
				"name": "Robson",
				"active": true
			},
			"active": true,
			"students": []
		},
        "active": true,
        "p1": 8.0,
        "p2": 4.0,
        "p3": 6.0,
        "pFinal": 5.0,
        "approved": false
    },
    {
        "id": 3,
        "name": "Carol",
        "class": {
			"id": 1,
			"name": "Cálculo",
			"teacher": {
				"id": 1,
				"name": "Robson",
				"active": true
			},
			"active": true,
			"students": []
		},
        "active": true,
        "p1": 9.1,
        "p2": 7.5,
        "p3": 7.2,
        "pFinal": 0,
        "approved": false
    }
];

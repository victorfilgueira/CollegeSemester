import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_PATH } from 'src/environments/environment';
import { IStudent } from './IStudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  getStudents()
  {
	return this.httpClient.get<IStudent[]>(`${API_PATH}api/student`).toPromise();
  }

  getStudentById(id: number) {
	return this.httpClient.get<IStudent>(`${API_PATH}api/student${id}`).toPromise();
  }

  saveStudent(student: IStudent) {
	return this.httpClient.post<IStudent>(`${API_PATH}api/student`, student).toPromise();
  }
}

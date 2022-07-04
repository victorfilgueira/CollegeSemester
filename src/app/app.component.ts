import { Component } from '@angular/core';
import { IStudent } from './student/IStudent';
import { StudentService } from './student/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CollegeSemester';

  constructor(private studentService: StudentService)
  {}

  getStudents() {
	this.studentService.getStudents().then(students => console.log(students)).catch(error => console.error(error));
  }

}


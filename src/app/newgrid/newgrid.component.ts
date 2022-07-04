import { Component, OnInit } from '@angular/core';
import { IgxColumnComponent } from 'igniteui-angular';
import { IStudent, studentsData } from './localData';
import { StudentService } from '../student/student.service';

@Component({
  selector: 'app-newgrid',
  templateUrl: './newgrid.component.html',
  styleUrls: ['./newgrid.component.scss']
})
export class NewGridComponent implements OnInit {
  public localData: IStudent[] = [];
  public StudentsData: any = null;
  title = 'newGrid';

  constructor( private studentService: StudentService, ) {}

  ngOnInit(): void {
	this.studentService.getStudents().then(data => this.StudentsData = data);
  }

  public onColumnInit(column: IgxColumnComponent): void {
    if (column.field === 'RegistererDate') {
      column.formatter = (date => date.toLocaleDateString());
    }
  }
}

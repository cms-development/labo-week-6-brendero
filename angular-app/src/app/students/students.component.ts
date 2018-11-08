import { Student } from './../Student';
import { StudentService } from './../studentservice/student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students: Student[];
  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.getStudents();
  }
  getStudents(): void {
    this.studentService.getStudents()
        .then(studentsData => {
          this.students = studentsData.data;
        });
  }
}

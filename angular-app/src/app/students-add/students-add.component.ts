import { StudentService } from './../studentservice/student.service';
import { Student, Attributes } from './../Student';
import { Json } from './../Json';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-students-add',
  templateUrl: './students-add.component.html',
  styleUrls: ['./students-add.component.scss']
})
export class StudentsAddComponent implements OnInit {
  jsonFormat: Json;
  student: Student;
  name: string;
  firstName: string;

  constructor(
    private studentService: StudentService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  addStudent(): void {
    this.jsonFormat = new Json();
    this.student = new Student();
    this.student.attributes = new Attributes();
    this.student.attributes.name = this.name;
    this.student.attributes.field_student = this.firstName;
    this.jsonFormat.data = this.student;

    this.studentService.addStudent(this.jsonFormat)
        .then(() => this.goBack());
  }
}

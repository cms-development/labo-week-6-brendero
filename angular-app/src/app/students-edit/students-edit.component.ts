import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from './../studentservice/student.service';
import { Json } from './../Json';
import { Component, OnInit } from '@angular/core';
import { Student, Attributes } from '../Student';

@Component({
  selector: 'app-students-edit',
  templateUrl: './students-edit.component.html',
  styleUrls: ['./students-edit.component.scss']
})
export class StudentsEditComponent implements OnInit {
  jsonFormat: Json;
  id: string;
  student: Student;
  name: string;
  firstName: string;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  goBack(): void {
    this.location.back();
  }

  editStudent(): void {
    this.jsonFormat = new Json();
    this.student = new Student();
    this.student.id = this.id;
    this.student.attributes = new Attributes();
    this.student.attributes.name = this.name;
    this.student.attributes.field_student = this.firstName;
    this.jsonFormat.data = this.student;

    this.studentService.updateStudent(this.jsonFormat)
        .then(() => this.goBack());
  }
}

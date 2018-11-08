import { Location } from '@angular/common';
import { InstructorService } from './../instructorservice/instructor.service';
import { Instructor, Attributes } from './../Instructor';
import { Json } from './../Json';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructors-add',
  templateUrl: './instructors-add.component.html',
  styleUrls: ['./instructors-add.component.scss']
})
export class InstructorsAddComponent implements OnInit {
  jsonFormat: Json;
  instructor: Instructor;
  name: string;
  firstName: string;
  academicTitle: string;
  academicRank: string;

  constructor(
    private instructorService: InstructorService,
    private location: Location
  ) { }

  ngOnInit() {
  }
  goBack(): void {
    this.location.back();
  }

  addInstructor(): void {
    this.jsonFormat = new Json();
    this.instructor = new Instructor();
    this.instructor.attributes = new Attributes();
    this.instructor.attributes.name = this.name;
    this.instructor.attributes.field_first_name = this.firstName;
    this.instructor.attributes.field_academic_title = this.academicTitle;
    this.instructor.attributes.field_academic_rank = this.academicRank;
    this.jsonFormat.data = this.instructor;

    this.instructorService.addInstructor(this.jsonFormat)
        .then(() => this.goBack());
  }
}

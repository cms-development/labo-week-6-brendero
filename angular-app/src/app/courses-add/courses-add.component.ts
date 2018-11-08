import { CourseService } from './../courseservice/course.service';
import { Course, Attributes } from './../Course';
import { Json } from './../Json';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-courses-add',
  templateUrl: './courses-add.component.html',
  styleUrls: ['./courses-add.component.scss']
})
export class CoursesAddComponent implements OnInit {
  name: string;
  academicInstitution: string;
  jsonFormat: Json;
  course: Course;

  constructor(
    private courseService: CourseService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  addCourse(): void {
    this.jsonFormat = new Json;
    this.course = new Course();
    this.course.attributes = new Attributes();
    this.course.attributes.name = this.name;
    this.course.attributes.field_academic_institution = this.academicInstitution;
    this.jsonFormat.data = this.course;

    this.courseService.addCourse(this.jsonFormat)
        .then(() => this.goBack());
  }
}

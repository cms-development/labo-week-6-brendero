import { Course } from './../Course';
import { CourseService } from './../courseservice/course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {
  courses: Course[];

  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses(): void {
    this.courseService.getCourses()
        .then(Courses => {
          this.courses = Courses.data;
        });
  }
}

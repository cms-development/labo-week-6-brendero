import { Location } from '@angular/common';
import { Course } from './../Course';
import { CourseService } from './../courseservice/course.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.scss']
})
export class CoursesDetailComponent implements OnInit {
  course: Course;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCourse();
  }

  goBack(): void {
    this.location.back();
  }
  getCourse(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.courseService.getCourse(id)
        .then(courseData => {
          this.course = courseData.data;
        });
  }
  deleteCourse(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.courseService.deleteCourse(id)
      .then(() => this.goBack());
  }
}

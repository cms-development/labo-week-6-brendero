import { Instructor } from './../Instructor';
import { InstructorService } from './../instructorservice/instructor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent implements OnInit {
  instructors: Instructor[];

  constructor(
    private instructorService: InstructorService
  ) { }

  ngOnInit() {
    this.getInstructors();
  }
  getInstructors(): void {
    this.instructorService.getInstructors()
        .then(instructorsData => {
          this.instructors = instructorsData.data;
        });
  }
}

import { Instructor } from './../Instructor';
import { InstructorService } from './../instructorservice/instructor.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructors-detail',
  templateUrl: './instructors-detail.component.html',
  styleUrls: ['./instructors-detail.component.scss']
})
export class InstructorsDetailComponent implements OnInit {
  instructor: Instructor;

  constructor(
    private instructorService: InstructorService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getInstructor();
  }
  getInstructor(): void {
    const id = this.router.snapshot.paramMap.get('id');

    this.instructorService.getInstructor(id)
        .then(instructorData => {
          this.instructor = instructorData.data;
          console.log(instructorData.data);
        });
  }
}

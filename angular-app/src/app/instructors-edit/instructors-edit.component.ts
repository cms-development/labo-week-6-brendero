import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { InstructorService } from './../instructorservice/instructor.service';
import { Instructor, Attributes } from './../Instructor';
import { Json } from './../Json';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructors-edit',
  templateUrl: './instructors-edit.component.html',
  styleUrls: ['./instructors-edit.component.scss']
})
export class InstructorsEditComponent implements OnInit {
  jsonFormat: Json;
  instructor: Instructor;
  name: string;
  firstName: string;
  id: string;
  academicTitle: string;
  academicRank: string;

  constructor(
    private instructorService: InstructorService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  goBack(): void {
    this.location.back();
  }

  editInstructor(): void {
    this.jsonFormat = new Json();
    this.instructor = new Instructor();
    this.instructor.attributes = new Attributes();
    this.instructor.attributes.name = this.name;
    this.instructor.attributes.field_first_name = this.firstName;
    this.instructor.attributes.field_academic_title = this.academicTitle;
    this.instructor.attributes.field_academic_rank = this.academicRank;
    this.jsonFormat.data = this.instructor;

    this.instructorService.updateInstructor(this.jsonFormat)
        .then(() => this.goBack());
  }
}

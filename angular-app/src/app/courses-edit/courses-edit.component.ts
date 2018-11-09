import { StudentService } from './../studentservice/student.service';
import { InstructorService } from './../instructorservice/instructor.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from './../courseservice/course.service';
import { Student } from './../Student';
import { Instructor } from './../Instructor';
import { Course, Attributes, Relationships, FieldInstructorData, FieldInstructor, FieldStudentsData, FieldStudents } from './../Course';
import { Json } from './../Json';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-edit',
  templateUrl: './courses-edit.component.html',
  styleUrls: ['./courses-edit.component.scss']
})
export class CoursesEditComponent implements OnInit {
  name: string;
  academicInstitution: string;
  jsonFormat: Json;
  course: Course;
  newData: Course;
  instructors: Instructor;
  formInstructors: string;
  students: Student;
  formStudents: string[];
  id: string;

  constructor(
    private instructorService: InstructorService,
    private studentService: StudentService,
    private courseService: CourseService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getInstructorValues();
    this.getStudentValues();
  }

  goBack(): void {
    this.location.back();
  }

  getInstructorValues(): void {
    this.instructorService.getInstructors()
        .then(instructorData => {
          this.instructors = instructorData.data;
        });
  }
  getStudentValues(): void {
    this.studentService.getStudents()
        .then(studentData => {
          this.students = studentData.data;
        });
  }

  editCourse(): void {
    this.jsonFormat = new Json;
    this.course = new Course();
    this.course.id = this.id;
    this.course.attributes = new Attributes();
    this.course.attributes.name = this.name;
    this.course.attributes.field_academic_institution = this.academicInstitution;
    this.course.relationships = new Relationships();
    this.course.relationships.field_instructor = new FieldInstructorData();
    this.course.relationships.field_instructor.data = new FieldInstructor();
    this.course.relationships.field_instructor.data.id = this.formInstructors;
    this.course.relationships.field_students = new FieldStudentsData();
    this.formStudents.forEach(el => {
      console.log(el);
      this.course.relationships.field_students.data = new FieldStudents();
      this.course.relationships.field_students.data.id = el;
    });
    this.jsonFormat.data = this.course;

    this.courseService.updateCourse(this.jsonFormat)
        .then(() => this.goBack());
  }
}

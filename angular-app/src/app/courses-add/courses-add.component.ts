import { Student } from './../Student';
import { StudentService } from './../studentservice/student.service';
import { InstructorService } from './../instructorservice/instructor.service';
import { Instructor } from './../Instructor';
import { CourseService } from './../courseservice/course.service';
import { Course, Attributes, Relationships, FieldInstructorData, FieldInstructor, FieldStudentsData, FieldStudents } from './../Course';
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
  instructors: Instructor;
  formInstructors: string;
  students: Student;
  formStudents: string[];

  constructor(
    private courseService: CourseService,
    private instructorService: InstructorService,
    private studentService: StudentService,
    private location: Location
  ) { }

  ngOnInit() {
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
  addCourse(): void {
    this.jsonFormat = new Json;
    this.course = new Course();
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

    console.log(this.course);
    this.courseService.addCourse(this.jsonFormat)
        .then(() => this.goBack());
  }
}

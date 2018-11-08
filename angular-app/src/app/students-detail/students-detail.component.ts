import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { StudentService } from '../studentservice/student.service';

@Component({
  selector: 'app-students-detail',
  templateUrl: './students-detail.component.html',
  styleUrls: ['./students-detail.component.scss']
})
export class StudentsDetailComponent implements OnInit {
  student: Student;
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getStudent();
  }
  getStudent(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(id)
        .then(studentData => {
          this.student = studentData.data;
        });
  }
}

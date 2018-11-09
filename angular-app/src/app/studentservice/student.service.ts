import { Student } from './../Student';
import { Json } from './../Json';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private tokenUrl = 'http://localhost/jsonapi/student/student';
  constructor() {
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
  }

   // CREATE
   async addStudent(student: Json): Promise<Student> {
      try {
        const res = await axios.request<Student>({
          method: 'post',
          url: this.tokenUrl,
          data: student
        });

        return res.data;
      } catch (err) {
        console.log(err);
      }

   }
   // READ
   // TODO: use authentication token in header to get data
   async getStudents(): Promise<Json> {
     try {
      const res = await axios.request<Json>({
        method: 'get',
        url: `${this.tokenUrl}?sort=-created`,
      });

      return res.data;
     } catch (err) {
        console.log(err);
     }
   }
   // detail
   async getStudent(id: string): Promise<Json> {
     try {
        const res = await axios.request<Json>({
          method: 'get',
          url: `${this.tokenUrl}/${id}`,
        });

        return res.data;
     } catch (err) {
        console.log(err);
     }
   }

  // UPDATE
  async updateStudent(student: Json): Promise<Student> {
    try {
      const res = await axios.request<Student>({
        method: 'patch',
        url: `${this.tokenUrl}/${student.data.id}`,
        data: student
      });

      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
  // DELETE

async deleteStudent(student: Student | string): Promise<Student> {
  try {
    const id = student;

    const res = await axios.request<Student>({
      method: 'delete',
      url: `${this.tokenUrl}/${id}`
    });

    return res.data;
  } catch (err) {
    console.log(err);
  }
}
}

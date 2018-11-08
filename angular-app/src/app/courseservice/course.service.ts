import { Course } from './../Course';
import { Json } from './../Json';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private tokenUrl = 'http://localhost/jsonapi/course/course';
  constructor() {
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
  }

   // CREATE
   async addCourse(course: Json): Promise<Course> {
      try {
        const res = await axios.request<Course>({
          method: 'post',
          url: this.tokenUrl,
          // TODO: add params
        });

        return res.data;
      } catch (err) {
        console.log(err);
      }

   }
   // READ
   // TODO: use authentication token in header to get data
   async getCourses(): Promise<Json> {
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
   async getCourse(id: string): Promise<Json> {
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
  async updateCourse(course: Course): Promise<Course> {
    try {
      const res = await axios.request<Course>({
        method: 'patch',
        url: `${this.tokenUrl}/${course.id}`,
        data: course
      });

      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
  // DELETE

async deleteCourse(course: Course | number): Promise<Course> {
  try {
    const id = typeof course === 'number' ? course : course.id;

    const res = await axios.request<Course>({
      method: 'delete',
      url: `${this.tokenUrl}/${id}`
    });

    return res.data;
  } catch (err) {
    console.log(err);
  }
}

}

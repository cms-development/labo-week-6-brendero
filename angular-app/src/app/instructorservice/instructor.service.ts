import { Instructor } from './../Instructor';
import { Json } from './../Json';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  private tokenUrl = 'http://localhost/jsonapi/instructor/instructor';
  constructor() {
      axios.defaults.headers.post['Content-Type'] = 'application/x-wwww-form-urlencoded';
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
    }

   // CREATE
   async addInstructor(instructor: Json): Promise<Instructor> {
      try {
        const res = await axios.request<Instructor>({
          method: 'post',
          url: this.tokenUrl,
          data: instructor
        });

        return res.data;
      } catch (err) {
        console.log(err);
      }

   }
   // READ
   async getInstructors(): Promise<Json> {
     try {
      const res = await axios.request<Json>({
        method: 'get',
        url: `${this.tokenUrl}?sort=-created`
      });

      return res.data;
     } catch (err) {
        console.log(err);
     }
   }
   // detail
   async getInstructor(id: string): Promise<Json> {
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
  async updateInstructor(instructor: Json): Promise<Instructor> {
    try {
      const res = await axios.request<Instructor>({
        method: 'patch',
        url: `${this.tokenUrl}/${instructor.data.id}`,
        data: instructor
      });

      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
  // DELETE

async deleteInstructor(instructor: Instructor | string): Promise<Instructor> {
  try {
    const id = instructor;

    const res = await axios.request<Instructor>({
      method: 'delete',
      url: `${this.tokenUrl}/${id}`
    });

    return res.data;
  } catch (err) {
    console.log(err);
  }
}

}

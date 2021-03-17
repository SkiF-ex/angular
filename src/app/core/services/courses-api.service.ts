import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';

const serverUrl = 'http://localhost:3000/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesApiService {

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
     return this.http.get<Course[]>(serverUrl);
  }

  deleteCourse(id: number): Observable<{}> {
    return this.http.delete(`${serverUrl}/${id}`);
  }
}

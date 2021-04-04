import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesApiService {

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${serverUrl}?_start=0&_end=3`);
  }

  getOneMoreCourse(end: number): Observable<Course[]> {
    return this.http.get<Course[]>(`${serverUrl}?_start=0&_end=${end}`);
  }

  getCourseByTitle(value: string): Observable<Course[]> {
    return this.http.get<Course[]>(`${serverUrl}?title_like=${value}`);
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${serverUrl}/${id}`);
  }

  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(serverUrl, course);
  }

  editCourseById(course: Course): Observable<Course> {
    return this.http.put<Course>(`${serverUrl}/${course.id}`, course);
  }

  deleteCourse(id: number): Observable<{}> {
    return this.http.delete(`${serverUrl}/${id}`);
  }
}

const serverUrl = 'http://localhost:3000/courses';

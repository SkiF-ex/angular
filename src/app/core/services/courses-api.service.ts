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
    return this.http.get<Course[]>(serverUrl);
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${serverUrl}/${id}`);
  }

  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`courses/`, course);
  }

  editCourseById(course: Course): Observable<Course> {
    return this.http.put<Course>(`courses/${course.id}`, course);
  }

  deleteCourse(id: number): Observable<{}> {
    return this.http.delete(`${serverUrl}/${id}`);
  }
}

const serverUrl = 'http://localhost:3000/courses';

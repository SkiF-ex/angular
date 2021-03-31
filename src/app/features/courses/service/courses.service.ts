import { Injectable } from '@angular/core';
import { CoursesApiService } from '../../../core/services/courses-api.service';
import { Observable } from 'rxjs';
import { Course } from '../../../core/models/course.model';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';

@Injectable()
export class CoursesService {

  constructor(private coursesApiService: CoursesApiService, private router: Router) { }

  getCourses(): Observable<Course[]> {
    return this.coursesApiService.getCourses();
  }

  editCourseById(course: Course): Observable<Course> {
    return this.coursesApiService.editCourseById(course).pipe(tap(() => this.router.navigate(['/courses'])));
  }

  addCourse(course: Course): Observable<Course> {
    return this.coursesApiService.addCourse(course).pipe(tap(() => this.router.navigate(['/courses'])));
  }

  getCourseById(id: number): Observable<Course> {
    return this.coursesApiService.getCourseById(id);
  }

  deleteCourse(id): Observable<{}> {
    return this.coursesApiService.deleteCourse(id);
  }
}

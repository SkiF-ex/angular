import { Injectable } from '@angular/core';
import { CoursesApiService } from '../../../core/services/courses-api.service';
import { Observable } from 'rxjs';
import { Course } from '../../../core/models/course.model';
import {Router} from '@angular/router';
import {finalize, tap} from 'rxjs/operators';
import {LoaderService} from '../../../core/services/loader.service';

@Injectable()
export class CoursesService {

  constructor(
    private coursesApiService: CoursesApiService,
    private router: Router,
    private loaderService: LoaderService,
  ) {}

  getCourses(): Observable<Course[]> {
    this.loaderService.show();
    return this.coursesApiService.getCourses().pipe(finalize(() => this.loaderService.hide()));
  }

  getCourseByTitle(value: string): Observable<Course[]> {
    this.loaderService.show();
    return this.coursesApiService.getCourseByTitle(value).pipe(finalize(() => this.loaderService.hide()));
  }

  editCourseById(course: Course): Observable<Course> {
    this.loaderService.show();
    return this.coursesApiService.editCourseById(course)
      .pipe(
        tap(() => this.router.navigate(['/courses'])),
        finalize(() => this.loaderService.hide()));
  }

  addCourse(course: Course): Observable<Course> {
    this.loaderService.show();
    return this.coursesApiService.addCourse(course)
      .pipe(
        tap(() => this.router.navigate(['/courses'])),
        finalize(() => this.loaderService.hide())
      );
  }

  getCourseById(id: number): Observable<Course> {
    this.loaderService.show();
    return this.coursesApiService.getCourseById(id).pipe(finalize(() => this.loaderService.hide()));
  }

  deleteCourse(id): Observable<{}> {
    this.loaderService.show();
    return this.coursesApiService.deleteCourse(id).pipe(finalize(() => this.loaderService.hide()));
  }
}

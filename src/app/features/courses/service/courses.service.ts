import { Injectable } from '@angular/core';
import { CoursesApiService } from '../../../core/services/courses-api.service';
import {Observable, Subject} from 'rxjs';
import { Course } from '../../../core/models/course.model';
import {Router} from '@angular/router';
import {finalize, switchMap, tap} from 'rxjs/operators';
import {LoaderService} from '../../../core/services/loader.service';

@Injectable()
export class CoursesService {

  private coursesSubject: Subject<Course[]> = new Subject();
  courses: Observable<Course[]> = this.coursesSubject.asObservable();

  constructor(
    private coursesApiService: CoursesApiService,
    private router: Router,
    private loaderService: LoaderService,
  ) {}

  getCourses(): Observable<Course[]> {
    this.loaderService.show();
    return this.coursesApiService.getCourses().pipe(tap(this.onCourseReceive));
  }

  getCourseByTitle(value: string): Observable<Course[]> {
    this.loaderService.show();
    return this.coursesApiService.getCourseByTitle(value).pipe(tap(this.onCourseReceive));
  }

  editCourseById(course: Course): Observable<Course> {
    this.loaderService.show();
    return this.coursesApiService.editCourseById(course)
      .pipe(
        tap(() => this.router.navigate(['/courses'])),
        tap(() => this.loaderService.hide()));
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
    return this.coursesApiService.deleteCourse(id).pipe(switchMap(() => this.getCourses()), tap(this.onCourseReceive));
  }

  loadMore(end: number): Observable<Course[]> {
    this.loaderService.show();
    return this.coursesApiService.getOneMoreCourse(end).pipe(tap(this.onCourseReceive));
  }

  private onCourseReceive = (courses: Course[]) => {
    this.coursesSubject.next(courses);
    this.loaderService.hide();
  }
}

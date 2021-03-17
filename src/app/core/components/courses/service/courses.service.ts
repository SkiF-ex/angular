import { Injectable } from '@angular/core';
import { CoursesApiService } from '../../../services/courses-api.service';
import { Observable } from 'rxjs';
import { Course } from '../../../models/course.model';

@Injectable()
export class CoursesService {

  constructor(private coursesApiService: CoursesApiService) { }

  getCourses(): Observable<Course[]> {
    return this.coursesApiService.getCourses();
  }

  deleteCourse(id) {
    return this.coursesApiService.deleteCourse(id);
  }
}

import { Component, OnInit } from '@angular/core';
import {Course} from '../../../core/models/course.model';
import {CoursesService} from '../service/courses.service';
import {switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-cont',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  courses: Course[] = [];

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe((data) => this.courses = data);
  }

  handleDelete(id: number): void {
    this.coursesService.deleteCourse(id).pipe(
      switchMap(() => this.coursesService.getCourses()),
      tap((data) => (this.courses = data))
    ).subscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { Course } from '../../../core/models/course.model';
import { CoursesService } from '../service/courses.service';
import { switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cont',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  courses: Course[] = [];

  constructor(private coursesService: CoursesService, private router: Router) { }

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe((data) => this.courses = data);
  }

  handleEdit(id: number): void {
    this.router.navigate(['/courses', id]);
  }

  handleDelete(id: number): void {
    this.coursesService.deleteCourse(id).pipe(
      switchMap(() => this.coursesService.getCourses()),
      tap((data) => (this.courses = data))
    ).subscribe();
  }
}

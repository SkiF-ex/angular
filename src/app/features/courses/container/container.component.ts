import { Component, OnInit } from '@angular/core';
import { Course } from '../../../core/models/course.model';
import { CoursesService } from '../service/courses.service';
import {debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-cont',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  courses: Course[] = [];

  searchControl = new FormControl('');

  constructor(
    private coursesService: CoursesService,
    private router: Router,
) { }

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe((data) => this.courses = data);

    this.searchControl.valueChanges
      .pipe(debounceTime(500),
        distinctUntilChanged(),
        switchMap((value) => this.coursesService.getCourseByTitle(value)))
      .subscribe((value: Course[]) => this.courses = value);
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

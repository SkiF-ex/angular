import { Component, OnInit } from '@angular/core';
import { Course } from '../../../core/models/course.model';
import {ActivatedRoute} from '@angular/router';
import { CoursesService } from '../../courses/service/courses.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  id: number;
  course: Course;
  constructor(private courseService: CoursesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    if (!isNaN(this.id)) {
      this.courseService.getCourseById(this.id)
        .pipe(tap((course) => {
          this.course = course;
        }))
        .subscribe();
    }
  }

  editHandler(course: Course): void {
    this.courseService.editCourseById(course).subscribe();
  }

  addHandler(course: Course): void {
    this.courseService.addCourse(course).subscribe();
  }
}

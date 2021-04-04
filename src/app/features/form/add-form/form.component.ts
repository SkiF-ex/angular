import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { Course } from '../../../core/models/course.model';
import {ActivatedRoute} from '@angular/router';
import { CoursesService } from '../../courses/service/courses.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent {
  course$: Observable<Course>;
  id: number;

  constructor(private courseService: CoursesService, private activatedRoute: ActivatedRoute) {

    this.id = this.activatedRoute.snapshot.params.id;
    if (!isNaN(this.id)) {
      this.course$ = this.courseService.getCourseById(this.id);
    }
  }

  editHandler(course: Course): void {
    this.courseService.editCourseById(course).subscribe();
  }

  addHandler(course: Course): void {
    this.courseService.addCourse(course).subscribe();
  }
}

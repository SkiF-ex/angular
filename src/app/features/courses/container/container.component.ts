import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import { Course } from '../../../core/models/course.model';
import { CoursesService } from '../service/courses.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cont',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers: [CoursesService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent {
  courses$: Observable<Course[]> = this.coursesService.courses;
  searchControl = new FormControl('');
  count: number;

  @Output() loadMore = new EventEmitter<number>();

  constructor(
    private coursesService: CoursesService,
    private router: Router,
) {
    this.coursesService.getCourses().subscribe();
    this.count = 4;

    this.searchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((value: string) => this.courses$ = this.coursesService.getCourseByTitle(value))).subscribe();
  }

  handleEdit(id: number): void {
    this.router.navigate(['/courses', id]);
  }

  handleDelete(id: number): void {
    this.coursesService.deleteCourse(id).subscribe();
  }

  handleLoadMore(): void {
    this.coursesService.loadMore(this.count).subscribe();
    this.count++;
  }
}

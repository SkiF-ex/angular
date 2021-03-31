import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCourseComponent } from './components/list-course/list-course.component';
import { TimePipe } from './pipes/time.pipe';
import { FreshPostDirective } from './directives/fresh-post.directive';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListCourseComponent, TimePipe, FreshPostDirective, CourseFormComponent],
  exports: [
    ListCourseComponent, TimePipe, FreshPostDirective, CourseFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }

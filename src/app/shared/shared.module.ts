import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCourseComponent } from './components/list-course/list-course.component';
import { TimePipe } from './pipes/time.pipe';
import { FreshPostDirective } from './directives/fresh-post.directive';

@NgModule({
  declarations: [ListCourseComponent, TimePipe, FreshPostDirective],
  exports: [
    ListCourseComponent, TimePipe, FreshPostDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

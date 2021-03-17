import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCourseComponent } from './components/list-course/list-course.component';



@NgModule({
  declarations: [ListCourseComponent],
  exports: [
    ListCourseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerComponent } from './container/container.component';
import { SearchBarComponent } from './container/search-bar/search-bar.component';
import { AddCourseButtonComponent } from './container/add-course-button/add-course-button.component';
import { CourseComponent } from './container/course/course.component';
import { CourseComponentA } from './container/course2/course.component';
import { LoadMoreComponent } from './container/load-more/load-more.component';
import { ContainerRoutingModule } from './container.routing-module';

@NgModule({
  declarations: [
    ContainerComponent,
    SearchBarComponent,
    AddCourseButtonComponent,
    CourseComponent,
    CourseComponentA,
    LoadMoreComponent,
  ],
  imports: [CommonModule, ContainerRoutingModule]
})
export class ContainerModule { }

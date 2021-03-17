import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerComponent } from './container/container.component';
import { SearchBarComponent } from './container/search-bar/search-bar.component';
import { AddCourseButtonComponent } from './container/add-course-button/add-course-button.component';
import { LoadMoreComponent } from './container/load-more/load-more.component';
import { ContainerRoutingModule } from './container.routing-module';
import {CoursesService} from './service/courses.service';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  declarations: [
    ContainerComponent,
    SearchBarComponent,
    AddCourseButtonComponent,
    LoadMoreComponent,
  ],
  imports: [CommonModule, ContainerRoutingModule, SharedModule],
  providers: [CoursesService]
})
export class ContainerModule { }

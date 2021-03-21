import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerComponent } from './container/container.component';
import { ContainerRoutingModule } from './container.routing-module';
import {CoursesService} from './service/courses.service';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    ContainerComponent,
  ],
  imports: [CommonModule, ContainerRoutingModule, SharedModule],
  providers: [CoursesService]
})
export class ContainerModule { }

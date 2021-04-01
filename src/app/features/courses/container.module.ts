import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { ContainerRoutingModule } from './container.routing-module';
import {CoursesService} from './service/courses.service';
import {SharedModule} from '../../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ContainerComponent,
  ],
    imports: [CommonModule, ContainerRoutingModule, SharedModule, ReactiveFormsModule],
  providers: [CoursesService]
})
export class ContainerModule { }

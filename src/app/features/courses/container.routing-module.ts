import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import {FormComponent} from '../form/add-form/form.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent
  },
  {
    path: ':id',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }

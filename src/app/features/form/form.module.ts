import { NgModule } from '@angular/core';
import { FormComponent } from './add-form/form.component';
import {CommonModule} from '@angular/common';
import { FormRoutingModule } from './form.routing-module';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    FormRoutingModule,
    CommonModule
  ],
})
export class FormModule { }

import { NgModule } from '@angular/core';
import { FormComponent } from './add-form/form.component';
import { CommonModule } from '@angular/common';
import { FormRoutingModule } from './form.routing-module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    FormComponent,
    ],
    imports: [
        FormRoutingModule,
        CommonModule,
        SharedModule
    ],
})
export class FormModule { }

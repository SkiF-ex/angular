import { NgModule } from '@angular/core';
import { AboutComponent } from './containers/about.component';
import { AboutRoutingModule } from './about.routing-module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    AboutRoutingModule,
    CommonModule
  ],
})
export class AboutModule { }

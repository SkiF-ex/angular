import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentsModule} from './core/components/components.module';
import { AppRoutingModule } from './app.routing-module';
import { HttpClientModule } from '@angular/common/http';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ComponentsModule,
        AppRoutingModule,
        SharedModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

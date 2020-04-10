import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {FlexModule} from '@angular/flex-layout';
import { BodyComponent } from './components/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FlexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

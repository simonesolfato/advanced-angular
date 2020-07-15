import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,

    MatFormFieldModule,
    MatButtonModule,

    RouterModule
  ],
  providers: []
})
export class HomeModule { }

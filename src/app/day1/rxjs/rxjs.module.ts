import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

import { RxjsComponent } from './rxjs.component';

@NgModule({
  declarations: [
    RxjsComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatButtonModule,
    RouterModule
  ],
  providers: []
})
export class RxjsModule { }

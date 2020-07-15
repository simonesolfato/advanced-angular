import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';

import { CourseComponent } from './default/course.component';
import { CoursePushComponent } from './push/course-push.component';
import { ChangeDetectionComponent } from './default/change-detection.component';
import { ChangeDetectionPushComponent } from './push/change-detection-push.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ChangeDetectionComponent,
    ChangeDetectionPushComponent,
    CourseComponent,
    CoursePushComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,

    MatButtonModule,
    RouterModule
  ],
  providers: []
})
export class ChangeDetectionModule { }

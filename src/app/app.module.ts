import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';

import { ChangeDetectionModule } from './day1/change-detection/change-detection.module';
import { ChangeDetectionComponent } from './day1/change-detection/default/change-detection.component';
import { ChangeDetectionPushComponent } from './day1/change-detection/push/change-detection-push.component';

import { ImmutabilityModule } from './day1/immutability/immutability.module';
import { ImmutabilityComponent } from './day1/immutability/immutability.component';

import { RxjsModule } from './day1/rxjs/rxjs.module';
import { RxjsComponent } from './day1/rxjs/rxjs.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'change-detection',
    component: ChangeDetectionComponent
  }, {
    path: 'change-detection-push',
    component: ChangeDetectionPushComponent
  }, {
    path: 'immutability',
    component: ImmutabilityComponent
  }, {
    path: 'rxjs',
    component: RxjsComponent
  }, {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,

    MatToolbarModule,

    HomeModule,
    ChangeDetectionModule,
    ImmutabilityModule,
    RxjsModule,

    RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

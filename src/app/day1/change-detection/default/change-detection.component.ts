import { Component } from '@angular/core';

import { Technology } from '../technology.model'

@Component({
  selector: 'app-change-detection',
  template: `
  <div fxLayout="column" fxLayoutAlign="center center" style="margin: 2em;">

    <h1>{{ title }}</h1>

    <div fxFlex="50" fxLayout="row">
      <button mat-raised-button color="primary" type="button" (click)="changeTechnologyProperties()">
        Change Technology Properties
      </button>

      <button fxFlexOffset="2" mat-raised-button color="primary" type="button" (click)="changeTechnologyObject()">
        Change Technology Object
      </button>
    </div>

    <app-course [author]="author" [tech]="tech"></app-course>

    <div>
      <button mat-raised-button color="primary" type="button" routerLink="/change-detection-push">
        Avanti
      </button>
    </div>

  </div>`
})
export class ChangeDetectionComponent {

  title = 'Change Detection Default';
  author = 'Simone Solfato';
  tech = new Technology('Angular', 10);

  constructor() { }

  changeTechnologyProperties() {
    this.tech.name = 'React';
    this.tech.version = 16;
  }

  changeTechnologyObject() {
    this.tech = new Technology('Node', 15);
  }

}

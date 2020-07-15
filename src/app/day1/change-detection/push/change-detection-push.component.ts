import { Component } from '@angular/core';

import * as Immutable from "immutable";

@Component({
  selector: 'app-change-detection-push',
  template: `
    <div fxLayout="column" fxLayoutAlign="center center" style="margin: 2em;">

      <h1>{{ title }}</h1>

      <div fxFlex="50" fxLayout="row">
        <button mat-raised-button color="primary" type="button" (click)="changeTechnology()">
          Change Technology
        </button>
      </div>

      <app-course-push [author]="author" [tech]="tech"></app-course-push>

      <div>
        <button mat-raised-button color="accent" type="button" routerLink="/change-detection">
          Indietro
        </button>

        <button fxFlexOffset="5" mat-raised-button color="primary" type="button" routerLink="/immutability">
          Avanti
        </button>
      </div>

      </div>`
})
export class ChangeDetectionPushComponent {

  title = 'Change Detection Push';
  author = 'Simone Solfato';
  tech = Immutable.Map({
    name: 'Angular',
    version: 10
  });

  constructor() { }

  changeTechnology() {
    this.tech = this.tech.merge({ name: 'Node', version: 16 });
  }

}

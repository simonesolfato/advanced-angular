import { Component } from '@angular/core';

import { HomeButton } from '../common/interfaces'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  sections: HomeButton[] = [
    {
      title: 'Change Detection',
      url: 'change-detection'
    }, {
      title: 'Change Detection push',
      url: 'change-detection-push'
    }, {
      title: 'Immutabilità',
      url: 'immutability'
    }, {
      title: 'RxJS',
      url: 'rxjs'
    }
  ];

  constructor() { }

}

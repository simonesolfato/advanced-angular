import { Technology } from './technology.model'

import { ChangeDetectionComponent } from './default/change-detection.component'

export class ChangeDetectionComponent_ChangeDetector {

  constructor(
    public titlePrevious: string,
    public authorPrevious: string,
    public techPrevious: Technology,
    public changeDetectionComponent: ChangeDetectionComponent
  ) { }

  detectChanges(title: string, author: string, tech: Technology) {
    if (title !== this.titlePrevious) {
      this.titlePrevious = title;
      this.changeDetectionComponent.title = title;
    }
    if (author !== this.authorPrevious) {
      this.authorPrevious = author;
      this.changeDetectionComponent.author = author;
    }
    if (tech !== this.techPrevious) {
      this.techPrevious = tech;
      this.changeDetectionComponent.tech = tech;
    }
  }

}

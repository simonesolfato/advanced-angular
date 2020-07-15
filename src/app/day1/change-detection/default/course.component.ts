import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Technology } from '../technology.model'

@Component({
  selector: 'app-course',
  template: `
  <div>
    <p>Created by: {{ author }}</p>
    <p>
      Technology: {{tech.name}}
    </p>
    <p>
      Version: {{tech.version}}
    </p>
  </div>`,
  changeDetection: ChangeDetectionStrategy.Default
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent {
  @Input() author: string;
  @Input() tech: Technology;
}

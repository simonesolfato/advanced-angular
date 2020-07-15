import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import * as Immutable from "immutable";

@Component({
  selector: 'app-course-push',
  template: `
  <div>
    <p>Created by: {{ author }}</p>
    <p>
      Technology: {{tech.get('name')}}
    </p>
    <p>
      Version: {{tech.get('version')}}
    </p>
  </div>`,
  changeDetection: ChangeDetectionStrategy.Default
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursePushComponent {
  @Input() author: string;
  @Input() tech: Immutable.Map<string, number>;
}

import { Component } from '@angular/core';
import { CoursesService } from './couses.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'courses',
    template: `
  <button class="btn btn-primary" [class.active]="isActive">Save</button>
    `

})

export class CoursesComponent {
    isActive = true;
}

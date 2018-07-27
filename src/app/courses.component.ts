import { Component } from '@angular/core';
import { CoursesService } from './couses.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'courses',
    template: `
  <button [style.backgroundColor]="isActive ? 'blue' : 'white'" >Save</button>
    `

})

export class CoursesComponent {
    isActive = true;
}

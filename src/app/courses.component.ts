import { Component } from '@angular/core';
import { CoursesService } from './couses.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'courses',
    template: `
  <button (click)="onSave()">Save</button>
    `

})

export class CoursesComponent {
    onSave() {
        console.log('saved');
    }
}

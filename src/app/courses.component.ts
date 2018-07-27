import { Component } from '@angular/core';
import { CoursesService } from './couses.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'courses',
    template: `
    <div (click)="onDivClick()">
  <button (click)="onSave($event)">Save</button>
  </div>
    `

})

export class CoursesComponent {
    onSave($event) {
        console.log('saved', $event);
    }

    onDivClick() {
        console.log('div was clicked');

    }
}

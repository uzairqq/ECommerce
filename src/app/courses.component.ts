import { Component } from '@angular/core';
import { CoursesService } from './couses.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'courses',
    template: `
<!--  <input (keyup)="OnKeyUpUsingAnEventInJavaScript($event)"/> -->
   <input (keyup.enter)="OnKeyUpUsingEventFilteringAngular()"/>
    `

})

export class CoursesComponent {
    // OnKeyUpUsingAnEventInJavaScript($event) {
    //     if ($event.keyCode === 13) { console.log('enter was pressed'); }
    // }
    OnKeyUpUsingEventFilteringAngular() {
        console.log('Enter wass pressed');

    }
}

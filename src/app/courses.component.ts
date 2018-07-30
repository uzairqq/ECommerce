import { Component } from '@angular/core';
import { CoursesService } from './couses.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'courses',
    template: `
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    `

})

export class CoursesComponent {
    email = 'me@example.com';

    onKeyUp() {
        console.log(this.email);

    }

}

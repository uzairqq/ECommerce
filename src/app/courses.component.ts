import { Component } from '@angular/core';
import { CoursesService } from './couses.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'courses',
    template: `
  <!-- <input (keyup.enter)="OnKeyUpUsingJsEvent($event)"/>  <!-- to get you what you type using js event -->
    <input #email (keyup.enter)="OnKeyUpUsingAngularTemplateVariables(email)"/>
    `

})

export class CoursesComponent {

    // OnKeyUpUsingJsEvent($event) {
    //     console.log($event.target.value);

    // }
    OnKeyUpUsingAngularTemplateVariables(email) {
        console.log(email.value);

    }
}

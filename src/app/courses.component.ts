import { Component } from '@angular/core';
import { CoursesService } from './couses.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'courses',
    template: `
    {{course.title | uppercase | lowercase}}<br/>
    {{course.students | number }}<br/>
    {{course.rating | number:'1.2-2'}} <br/>
    {{course.price | currency:'$':true:'3.2-2' }} <br/>
    `

})

export class CoursesComponent {

    course = {
        title: 'The Angular Couse',
        rating: 4.975,
        students: 30123,
        price: 190.95,
    };

}

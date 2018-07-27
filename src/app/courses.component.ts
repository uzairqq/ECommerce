import { Component } from '@angular/core';
import { CoursesService } from './couses.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'courses',
    template: `<h1>
    {{title}}</h1>
    <ul>
    <li *ngFor="let course of courses">
    {{course}}
    </li>
    </ul>
    `

})

export class CoursesComponent {
    title = 'List Of Course';
    courses;

    constructor(service: CoursesService) {
        // const service = new CoursesService(); // tight coupling
        this.courses = service.getCourses();
    }
}

import { Component } from '@angular/core';

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
    courses = ['english', 'urdu', 'maths'];
}

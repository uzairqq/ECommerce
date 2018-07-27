import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'courses',
    template: '<h1>{{title}}</h1>'

})

export class CoursesComponent {
    title = 'List Of Course';
}

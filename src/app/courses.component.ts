import { Component } from '@angular/core';
import { CoursesService } from './couses.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'courses',
    template: `
    <h1>{{title}}</h1>
    <img src={{imageUrl}}/>
    <img [src]="imageUrl"/>
    `

})

export class CoursesComponent {
    title = 'List Of Course';
    imageUrl = 'http://bookmarkurl.info/images/place/place-1.jpg';

}

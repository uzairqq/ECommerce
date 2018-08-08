import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
<ul>
<li *ngFor="let course of courses;index as i">
{{i}}--{{course.name}}
</li>
</ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
  ];





}

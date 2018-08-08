import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <button (click)="onAdd()">Add</button>
<ul>
<li *ngFor="let course of courses;index as i">
{{i}}--{{course.name}}
<button (click)="onChange(course)">Change</button>
<button (click)="onRemove(course)">Remove</button>
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
  onAdd() {
    this.courses.push({ id: 4, name: 'course4' });
  }
  onRemove(course) {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  onChange(course) {
    course.name = 'Updated';
  }




}

import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <div *ngIf="courses.length>0;  else noCourses" >
  List Of Courses
  </div>
  <ng-template #noCourses>
  No Courses Yet
  </ng-template>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = [];







}

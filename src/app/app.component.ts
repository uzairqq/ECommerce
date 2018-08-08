import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <div *ngIf="courses.length>0; then courseList else noCourses"></div>
  <ng-template #courseList>
  List Of Courses
  </ng-template>
  <ng-template #noCourses>
  No Courses Yet
  </ng-template>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = [1, 2];







}

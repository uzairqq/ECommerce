import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <div *ngIf="courses.length>0">
  List Of Courses
  </div>
  <div *ngIf="courses.length==0">
  No Courses Yet
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = [1, 2];







}

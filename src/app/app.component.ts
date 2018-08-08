import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
<div [hidden]="courses.length==0">
List  of Courses
</div>
<div [hidden]="courses.length>0">
No Course Yet
</div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = [];







}

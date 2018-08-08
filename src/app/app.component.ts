import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <span>{{task.assigned?.name}}</span>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  task = {
    title: 'Review Application',
    assigned: {
      name: null
    }
  };





}

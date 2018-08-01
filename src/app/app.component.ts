import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <h1>Hello World</h1>
  <h2>Parent App Component</h2>
  <p>Value from child Component is </p>
  Message: {{message}}
  <app-child (messageEvent)="receiveMessage($event)" ></app-child>
 
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'hello world parent here';
  receiveMessage($event) {
    this.message = $event;
  }
}

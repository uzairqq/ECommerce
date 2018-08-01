import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <h1>Hello World</h1>
  <h2>Parent App Component</h2>
  <p>Value from child Component is </p>
  <app-child [messageFromParent]="message"></app-child>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'Hello Uzair I am From Parent ';

}

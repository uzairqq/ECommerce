import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <h1>Hello World</h1>
  <h2>Parent App Component</h2>
  <p>Value from child Component is </p>
  Message: {{message}}
  <app-child (messageEvent)="receiveMessage($event)" ></app-child>
  <input type="text" #myInputText>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('myInputText') inputText;

  constructor() {
    setInterval(() => { this.send2Server(); }, 2000);
  }

  message = 'hello world parent here';
  receiveMessage($event) {
    this.message = $event;
  }

  send2Server() {
    const data = this.inputText.nativeElement;
    console.log(data.Value);
  }

}

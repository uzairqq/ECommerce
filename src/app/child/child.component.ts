import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  // templateUrl: './child.component.html',
  template:
    `
  <h1>Child component</h1>
  <button (click)="sendMessage()" class="button">Send Message To Parent</button>
    `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Output() messageEvent = new EventEmitter<string>();

  message = 'Hello from child component';

  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    this.messageEvent.emit(this.message);
  }

}

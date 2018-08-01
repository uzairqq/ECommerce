import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  // templateUrl: './child.component.html',
  template:
    `
  <h1>Child component</h1>
  <p>Say {{messageFromParent}}
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() messageFromParent: string;

  constructor() { }

  ngOnInit() {
  }


}

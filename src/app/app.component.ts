import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
 <input type="text" [appInputFormat]="'uppercase'">
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}

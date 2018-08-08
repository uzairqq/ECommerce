import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <button
  [style.backgroundColor]="canSave ? 'blue' : 'gray' "
  [style.color]="canSave ? 'white' :'black'"
  [style.fontWeight]="canSave ? 'bold' : 'normal'"
  >Save with Default approach</button>

<button [ngStyle]="{
  'backgroundColor':canSave ? 'blue' : 'gray',
  'color':canSave ? 'white' :'black',
  'fontWeight':canSave ? 'bold' : 'normal'

}" >Save With ngStyle Approach</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  canSave = true;





}

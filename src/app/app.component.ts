import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
<ul class="nav nav-pills">
<li [class.active]="viewMode =='map' "><a (click)="viewMode ='map' ">Map View</a></li>
<li [class.active]="viewMode=='list' "><a (click)="viewMode ='list'">List View</a></li>
</ul>
<div [ngSwitch]="viewMode">
<div *ngSwitchCase="'map'">Map View Content</div>
<div *ngSwitchCase="'list'">List View Content</div>
<div *ngSwitchDefault>OtherWise</div>
</div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  viewMode = 'map';






}

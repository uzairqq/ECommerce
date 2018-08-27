import { Component } from '@angular/core';

@Component({
  selector: 'app-bootstrap-panel',
  templateUrl: './bootstrap-panel.component.html',
  styleUrls: ['./bootstrap-panel.component.css']
})
export class BootstrapPanelComponent {

  contactMethod = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' }
  ];

  log(x) {
    console.log(x);
  }

  takeForm(x) {
    console.log(x);
  }
}

import { Component } from '@angular/core';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-split-button',
  templateUrl: './split-button.component.html',
  styleUrls: ['./split-button.component.css']
})
export class SplitButtonComponent {

  items: MenuItem[];

  constructor(){
    this.items = [
      {
          label: 'Producto',
          routerLink: ['agregar-producto']
      },
      {
          label: 'Tipo',
      }
  ];
  }

}

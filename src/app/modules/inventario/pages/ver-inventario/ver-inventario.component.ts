import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-ver-inventario',
  templateUrl: './ver-inventario.component.html',
  styleUrls: ['./ver-inventario.component.css']
})

export class VerInventarioComponent {
  items: MenuItem[];
  tabs: MenuItem[];
  activeItem: MenuItem;

  constructor() {
    this.items = [
      { label: 'Producto', routerLink: ['agregar-producto'] },
      { label: 'Tipo', },
      { label: 'Categoría', },
      { separator: true },
      { label: 'Realizar compra', }
    ];

    this.tabs = [
      { label: 'Inventario', icon: 'pi pi-fw pi-box' },
      { label: 'Entradas', icon: 'pi pi-briefcase' }
    ];

    this.activeItem = this.tabs[1];
    console.log(this.activeItem);
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
}

}
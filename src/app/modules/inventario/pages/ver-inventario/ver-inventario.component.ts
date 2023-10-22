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

    visibleCompra: boolean = false;

    constructor() {
        this.items = [
            { label: 'Marca', routerLink: ['agregar-marca'] },
            { label: 'Producto', routerLink: ['agregar-producto'] },
            { label: 'Categoría' },
            { separator: true },
            { label: 'Realizar compra', command: () => { this.showRealizarCompra(); } }
        ];

        this.tabs = [
            { label: 'Inventario', icon: 'pi pi-fw pi-box' },
            { label: 'Entradas', icon: 'pi pi-briefcase' }
        ];

        this.activeItem = this.tabs[0];
    }

    onActiveItemChange(event: MenuItem) {
        this.activeItem = event;
    }

    showRealizarCompra() {
        this.visibleCompra = true;
    }

}

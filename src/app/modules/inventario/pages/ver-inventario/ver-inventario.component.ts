import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogAgregarCategoriaComponent } from '../../components/dialog-agregar-categoria/dialog-agregar-categoria.component';
import { DialogRealizarCompraComponent } from '../../components/dialog-realizar-compra/dialog-realizar-compra.component';

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
    ref: DynamicDialogRef | undefined;

    constructor(public dialogService: DialogService, public messageService: MessageService) {

        this.items = [
            { label: 'Marca', routerLink: ['agregar-marca'] },
            { label: 'Producto', routerLink: ['agregar-producto'] },
            { label: 'Categoría', command: () => { this.showAgregarCategoria(); } },
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

    showAgregarCategoria() {
        this.ref = this.dialogService.open(DialogAgregarCategoriaComponent, { header: 'Agregar Categoría' });
    }

    showRealizarCompra() {
        this.ref = this.dialogService.open(DialogRealizarCompraComponent, { header: 'Realizar Compra' });
    }

}

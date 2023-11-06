import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogAgregarCategoriaComponent } from '../../components/dialog-agregar-categoria/dialog-agregar-categoria.component';
import { DialogRealizarCompraComponent } from '../../components/dialog-realizar-compra/dialog-realizar-compra.component';

@Component({
    selector: 'app-ver-inventario',
    templateUrl: './ver-inventario.component.html',
    styleUrls: ['./ver-inventario.component.css']
})
export class VerInventarioComponent implements OnInit {

    public items: MenuItem[] = [
        { label: 'Marca', routerLink: ['agregar-marca'] },
        { label: 'Producto', routerLink: ['agregar-producto'] },
        { label: 'Categoría', command: () => { this.showAgregarCategoria(); } },
        { separator: true },
        { label: 'Realizar compra', command: () => { this.showRealizarCompra(); } }
    ];

    public tabs: MenuItem[] = [
        { label: 'Inventario', icon: 'pi pi-fw pi-box' },
        { label: 'Entradas', icon: 'pi pi-briefcase' }
    ];

    public activeItem: MenuItem = this.tabs[0];

    public visibleCompra: boolean = false;

    public titulo: string | undefined = 'Inventario';

    private ref: DynamicDialogRef | undefined;

    public constructor(
        public dialogService: DialogService,
        public messageService: MessageService
    ) { }

    public ngOnInit(): void { }

    public onActiveItemChange(event: MenuItem): void {
        this.activeItem = event;
        this.titulo = event.label;
    }

    public showAgregarCategoria(): void {
        this.ref = this.dialogService.open(DialogAgregarCategoriaComponent, {
            header: 'Agregar Categoría',
        });

        this.ref.onClose.subscribe((categoria: any) => {
            if(!categoria) {
                // agrega mensaje de error
                return;
            }

            // agrega mensaje de realizad
        });
    }

    public showRealizarCompra(): void {
        this.ref = this.dialogService.open(DialogRealizarCompraComponent, {
            header: 'Realizar Compra',
            width: '500px',
            height: '90%',
            contentStyle: { overflow: 'auto' },
            baseZIndex: 10000,
            maximizable: true
        });
    }

}

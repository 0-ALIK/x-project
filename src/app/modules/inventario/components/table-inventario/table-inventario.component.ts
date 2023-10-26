import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api'

@Component({
    selector: 'app-table-inventario',
    templateUrl: './table-inventario.component.html',
    styleUrls: ['./table-inventario.component.css']
})

export class TableInventarioComponent {

    public ref: DynamicDialogRef | undefined;

    public products = [
        { id: 1, name: 'Coca Cola', category: 'Bebidas', type: 'Refresco', price_unit: 10.00, stock: 15, photo: 'null', p_reorden: 'null' },
        { id: 2, name: 'Pepsi', category: 'Bebidas', type: 'Refresco', price_unit: 12.00, stock: 20, photo: 'null', p_reorden: 'null' },
        { id: 3, name: 'Sprite', category: 'Bebidas', type: 'Refresco', price_unit: 11.00, stock: 18, photo: 'null', p_reorden: 'null' }
    ];

    public constructor(
        private confirmationService: ConfirmationService,
        private messageService: MessageService,
        public dialogService: DialogService
    ) { }


    public onEliminarProducto( product: any ): void {
        this.confirmationService.confirm({
            message: `¿Quieres eliminar el registro de ${product.name}?`,
            header: 'Confirmar Eliminación',
            icon: 'pi pi-info-circle',
            accept: this.eliminarProducto,
            reject: (type: ConfirmEventType) => {
                switch (type) {
                    case ConfirmEventType.REJECT:
                        this.messageService.add({ severity: 'error', summary: 'Operación Fallida', detail: 'Registro no eliminado' });
                        break;
                    case ConfirmEventType.CANCEL:
                        this.messageService.add({ severity: 'warn', summary: 'Operación Cancelada', detail: 'Cancelado' });
                        break;
                }
            },
            key: 'confirmDialog'
        });
    }

    public showGenerarReporte(): void {
        /* this.ref = this.dialogService.open(DialogGenerarReporteComponent, { header: 'Generar Reporte' }); */
    }

    public clear(table: Table): void {
        table.clear();
    }

    private eliminarProducto = (): void => {
        this.messageService.add({ severity: 'info', summary: 'Operación Exitosa', detail: 'Registro eliminado' });
    }

}

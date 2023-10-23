import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api'
import { DialogGenerarReporteComponent } from '../dialog-generar-reporte/dialog-generar-reporte.component';

@Component({
    selector: 'app-table-inventario',
    templateUrl: './table-inventario.component.html',
    styleUrls: ['./table-inventario.component.css']
})

export class TableInventarioComponent {

    position: string = 'center';
    ref: DynamicDialogRef | undefined;

    constructor(private confirmationService: ConfirmationService, private messageService: MessageService, public dialogService: DialogService) { }

    public products = [
        { id: 1, name: 'Coca Cola', category: 'Bebidas', type: 'Refresco', price_unit: 10.00, stock: 15, photo: 'null', p_reorden: 'null' },
        { id: 2, name: 'Pepsi', category: 'Bebidas', type: 'Refresco', price_unit: 12.00, stock: 20, photo: 'null', p_reorden: 'null' },
        { id: 3, name: 'Sprite', category: 'Bebidas', type: 'Refresco', price_unit: 11.00, stock: 18, photo: 'null', p_reorden: 'null' }
    ];

    confirmPosition(position: string, productId: number) {
        this.position = position;

        const product = this.products.find((p) => p.id === productId);

        if (product) {
            this.confirmationService.confirm({
                message: `¿Quieres eliminar el registro de ${product.name}?`,
                header: 'Confirmar Eliminación',
                icon: 'pi pi-info-circle',
                accept: () => {
                    this.messageService.add({ severity: 'info', summary: 'Operación Exitosa', detail: 'Registro eliminado' });
                },
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
                key: 'positionDialog'
            });
        }
    }

    showGenerarReporte() {
        this.ref = this.dialogService.open(DialogGenerarReporteComponent, { header: 'Generar Reporte' });
    }

    clear(table: Table) {
        table.clear();
    }

}

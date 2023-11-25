import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Compra } from 'src/app/interfaces/pedido.interface';
import { compras } from 'src/app/interfaces/data';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';

@Component({
    selector: 'app-table-entradas',
    templateUrl: './table-entradas.component.html',
    styleUrls: ['./table-entradas.component.css']
})
export class TableEntradasComponent implements OnInit {

    ref: DynamicDialogRef | undefined;

    constructor(
        public dialogService: DialogService,
        private confirmationService: ConfirmationService,
        private messageService: MessageService,
    ) { }

    public compras: Compra[] | undefined;

    public ngOnInit(): void {
        setTimeout(() => {
            this.compras = compras;
        }, 5000);
    }

    public onEliminarProducto( compra: Compra ): void {
        this.confirmationService.confirm({
            message: `¿Quieres eliminar el registro ${compra.id_compra}?`,
            header: 'Confirmar Eliminación',
            icon: 'pi pi-info-circle',
            accept: this.eliminarCompra,
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

    private eliminarCompra = (): void => {
        this.messageService.add({ severity: 'info', summary: 'Operación Exitosa', detail: 'Registro eliminado' });
    }

    showGenerarReporte() {
        /* this.ref = this.dialogService.open(DialogGenerarReporteComponent, { header: 'Generar Reporte' }); */
    }
}

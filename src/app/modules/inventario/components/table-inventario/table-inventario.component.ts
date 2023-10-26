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

    // La variable position es utilizada para que el p-confirmDialog salga en el centro
    position: string = 'center';
    ref: DynamicDialogRef | undefined;

    constructor(private confirmationService: ConfirmationService, private messageService: MessageService, public dialogService: DialogService) { }

    // Datos de los Productos
    public products = [
        { id: 1, name: 'Coca Cola', category: 'Bebidas', type: 'Refresco', price_unit: 10.00, stock: 15, photo: 'null', p_reorden: 'null' },
        { id: 2, name: 'Pepsi', category: 'Bebidas', type: 'Refresco', price_unit: 12.00, stock: 20, photo: 'null', p_reorden: 'null' },
        { id: 3, name: 'Sprite', category: 'Bebidas', type: 'Refresco', price_unit: 11.00, stock: 18, photo: 'null', p_reorden: 'null' }
    ];

    // Metodo del boton trash ubicado en la columna "Acciones" que recibe 2 parametros, la posicion donde aparece el p-confirmDialog y el id del producto a eliminar
    confirmPosition(position: string, productId: number) {
        this.position = position;

        // Constante que obtiene toda la informacion del producto filtrandolo por el id
        const product = this.products.find((p) => p.id === productId);

        // Esta condicion es la que hace aparecer el p-confirmDialog con el nombre del producto y botones de Si, No y (X)->Cancelar
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

    // Esto abre dialog-generar-reporte
    showGenerarReporte() {
        this.ref = this.dialogService.open(DialogGenerarReporteComponent, { header: 'Generar Reporte' });
    }

    // Metodo que limpia los filtros ingresados por el usuario
    clear(table: Table) {
        table.clear();
    }

}

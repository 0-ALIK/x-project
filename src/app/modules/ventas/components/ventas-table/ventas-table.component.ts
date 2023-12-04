import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { pedidos } from 'src/app/interfaces/data';
import { Pedido } from 'src/app/interfaces/pedido.interface';
import { ImportesCalcService } from '../../services/importes-calc.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { VentasService } from 'src/app/services/ventas.service';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';
import { GenerarReportesVentasComponent } from 'src/app/modules/analitica/components/generar-reportes-ventas/generar-reportes-ventas.component';

@Component({
  selector: 'app-ventas-table',
  template: `
    <p-toast></p-toast>
    <p-confirmDialog
        key="confirmDialog"
        [style]="{ width: '50vw' }"
        rejectButtonStyleClass="p-button-outlined"
        acceptLabel="Si"
        rejectLabel="No">
    </p-confirmDialog>

    <p-table
        #table
        [value]="pedidos"
        styleClass="p-datatable-gridlines"
        [tableStyle]="{ 'min-width': '50rem' }"
        selectionMode="single"
        [(selection)]="selectedPedido"
        (onRowSelect)="onRowSelect( $event )">

        <ng-template pTemplate="caption">
            <div class="caption">
                <div class="p-buttonset">
                    <button pButton label="Limpiar" (click)="table.clear()" class="p-button-outlined" icon="pi pi-filter-slash"></button>
                    <button pButton label="Reporte" (click)="showGenerarReporte()" icon="pi pi-file-export"></button>
                </div>
                <span class="p-input-icon-left">
                    <i class="pi pi-search"></i>
                    <input type="text" pInputText placeholder="Buscar...">
                </span>
            </div>
        </ng-template>

        <ng-template pTemplate="header">
            <tr>
                <th>
                    <div class="flex align-items-center">
                        Cliente
                        <p-columnFilter field="cliente.nombre" display="menu"></p-columnFilter>
                    </div>
                </th>
                <th>
                    <div class="flex align-items-center">
                        Fecha
                        <p-columnFilter field="fecha" type="date" display="menu"></p-columnFilter>
                    </div>
                </th>
                <th>
                    <div class="flex align-items-center">
                        Estado
                        <p-columnFilter field="estado.nombre" display="menu"></p-columnFilter>
                    </div>
                </th>
                <th>
                    <div class="flex align-items-center">
                        Empresa
                        <p-columnFilter field="empresa.nombre" display="menu"></p-columnFilter>
                    </div>
                </th>
                <th>Importe de la venta</th>
                <th>Importe pagado</th>
                <th>Importe debido</th>
                <th>Acciones</th>
            </tr>
        </ng-template>

        <ng-template pTemplate="body" let-pedido>
            <tr [pSelectableRow]="pedido">
                <td>
                    <div class="celda-cliente">
                        <div>
                            <p-avatar [image]="pedido.cliente.foto" shape="circle"></p-avatar>
                        </div>
                        <p class="celda-cliente-nombre">{{ pedido.cliente.nombre + ' ' + pedido.cliente.apellido }}</p>
                    </div>
                </td>

                <td>
                    {{ pedido.fecha | date }}
                </td>

                <td>
                    <p-tag [value]="pedido.estado.nombre"></p-tag>
                </td>

                <td>
                    <p *ngIf="!pedido.cliente.empresa">Sin empresa asociada</p>
                    <div *ngIf="pedido.cliente.empresa" class="celda-cliente">
                        <div>
                            <p-avatar [image]="pedido.cliente.empresa.foto" shape="square"></p-avatar>
                        </div>
                        <p class="celda-cliente-nombre">{{ pedido.cliente.empresa.nombre }}</p>
                    </div>
                </td>

                <td>
                    {{ importesCalc.calcularImporte( pedido.pedido_productos || [] ) | currency:'USD':'symbol':'1.2-2' }}
                </td>

                <td>
                    {{ importesCalc.calcularImportePagado( pedido.pago || [] ) | currency:'USD':'symbol':'1.2-2' }}
                </td>

                <td>
                    {{ importesCalc.calcularImporteDebido( pedido.pedido_productos || [], pedido.pago || [] ) | currency:'USD':'symbol':'1.2-2' }}
                </td>

                <td>
                    <p-button
                        (onClick)="onEliminarPedido(pedido)"
                        icon="pi pi-trash"
                        severity="danger"
                        [text]="true"
                        [raised]="true">
                    </p-button>
                </td>
            </tr>
        </ng-template>

    </p-table>
  `,
  styleUrls: ['./ventas-table.component.css']
})
export class VentasTableComponent implements OnInit {

    public pedidos: Pedido[] = [];

    public selectedPedido: Pedido | undefined;

    public ref: DynamicDialogRef | undefined;

    public constructor(
        public dialogService: DialogService,
        private router: Router,
        public importesCalc: ImportesCalcService,
        public ventasService: VentasService,
        private confirmationService: ConfirmationService,
        private messageService: MessageService
    ) { }

    public showGenerarReporte(): void {
        this.ref = this.dialogService.open(GenerarReportesVentasComponent, {
            header: 'Generar Reporte',
            height: '70%'
        });
    }

    public ngOnInit(): void {
        this.ventasService.getAllPedidos().subscribe({
            next: (pedidos) => {
                console.log(pedidos);
                this.pedidos = pedidos;
            }
        });
    }

    public example( evento: any ): void {
        console.log('filtro personalizado');
        console.log( evento );
    }

    public onEliminarPedido( pedido: Pedido ): void {
        this.confirmationService.confirm({
            message: `¿Quieres eliminar el registro de ${pedido.id_pedido}?`,
            header: 'Confirmar Eliminación',
            icon: 'pi pi-info-circle',
            accept: () => {
                if(!pedido.id_pedido) return;
                this.eliminarPedido(pedido.id_pedido)
            },
            reject: (type: ConfirmEventType) => {
                switch (type) {
                    case ConfirmEventType.REJECT:
                        this.messageService.add({ severity: 'error', summary: 'Operación Fallida', detail: 'Registro no eliminado' });
                        break;
                    case ConfirmEventType.CANCEL:
                        this.messageService.add({ severity: 'warn', summary: 'Operación Cancelada', detail: 'Eliminación de venta cancelada' });
                        break;
                }
            },
            key: 'confirmDialog'
        });
    }

    public eliminarPedido(id: number): void {
        this.ventasService.borrarPedido(id).subscribe({
            next: resp => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Pedido eliminado',
                });
                this.pedidos = this.pedidos.filter(p => p.id_pedido !== id);
            },
            error: error => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error al eliminar el pedido',
                });
            }
        });
    }

    public onRowSelect( event: any ): void {
        this.router.navigate([
            '/app/ventas',
            this.selectedPedido?.id_pedido
        ]);
    }

}

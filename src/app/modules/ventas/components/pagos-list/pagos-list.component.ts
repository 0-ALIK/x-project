import { Component, Input, OnInit } from '@angular/core';
import { Pago } from 'src/app/interfaces/pedido.interface';
import { ImportesCalcService } from '../../services/importes-calc.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AgregarEditarPagoComponent } from '../agregar-editar-pago/agregar-editar-pago.component';
import { MessageService } from 'primeng/api';
import { VentasService } from 'src/app/services/ventas.service';
import { Button } from 'primeng/button';


@Component({
    selector: 'app-pagos-list',
    template:`
    <div>
        <p-toast></p-toast>
        <p-table
            [value]="pagos || []"
            styleClass="p-datatable-gridlines"
            [scrollable]="true"
            [scrollHeight]="'400px'">

            <ng-template pTemplate="caption">
                <div class="flex justify-content-between align-items-center">
                    <div>
                        <p>{{pagos?.length}} pagos realizados</p>
                        <p>{{ calcDeuda() | currency:'USD':'symbol':'1.2-2'}} de deuda</p>
                    </div>
                    <p-button *ngIf="esAdmin" label="Agregar pago" (onClick)="agregarPago()"></p-button>
                    <div *ngIf="!esAdmin"></div>
                </div>
            </ng-template>

            <ng-template pTemplate="header">
                <tr>
                    <th>Monto</th>
                    <th>Fecha</th>
                    <th>Forma de pago</th>
                    <th *ngIf="esAdmin">Acciones</th>
                </tr>
            </ng-template>

            <ng-template pTemplate="body" let-pago>
                <tr>
                    <td>{{pago.monto | currency:'USD':'symbol':'1.2-2' }}</td>
                    <td>{{pago.fecha | date}}</td>
                    <td><p-tag [value]="pago.forma_pago.nombre"></p-tag></td>
                    <td *ngIf="esAdmin">
                        <p-button
                            #button
                            (onClick)="eliminarPago( pago, button )"
                            icon="pi pi-trash"
                            severity="danger"
                            [text]="true"
                            [raised]="true">
                        </p-button>
                    </td>
                </tr>
            </ng-template>

            <ng-template pTemplate="summary" let-columns>
                <div class="flex align-items-center justify-content-between">
                    Se ha pagado un total de {{ importesCalc.calcularImportePagado( pagos || [] ) | currency:'USD':'symbol':'1.2-2' }}
                </div>
            </ng-template>
        </p-table>
    </div>
    `,
})
export class PagosListComponent implements OnInit {

    @Input('pedidoid')
    public pedidoid!: number;

    @Input('pagos')
    public pagos: Pago[] | undefined;

    @Input('importe')
    public importe: number | undefined;

    @Input('importePagado')
    public importePagado: number | undefined;

    private ref: DynamicDialogRef | undefined;

    public esAdmin: boolean =false;

    public constructor(
        public importesCalc: ImportesCalcService,
        public dialogService: DialogService,
        public message: MessageService,
        public ventasService: VentasService
    ) {}

    public ngOnInit(): void {
        if(!localStorage.getItem('usuario')) {
            const usuario = JSON.parse(localStorage.getItem('usuario') || '');
            if(usuario.tipo === 'admin') {
                this.esAdmin = true;
            }
        }
    }

    public agregarPago(): void {
        this.ref = this.dialogService.open(AgregarEditarPagoComponent, {
            header: 'Agregar pago',
            data: {
                debido: this.calcDeuda(),
                pedidoid: this.pedidoid
            },
            height: '70%'
        });

        this.ref.onClose.subscribe((pago: Pago) => {
            if(!pago) {
                this.message.add({severity: 'error', summary: 'Error', detail: 'No se pudo agregar el pago'});
                return;
            }
            this.message.add({severity: 'success', summary: 'Pago agregado', detail: 'Pago de '+pago.monto+' agregado'});
            this.pagos?.push(pago);
            console.log('xd');
        });
    }

    public eliminarPago( pago: Pago, button: Button ): void {
        button.loading = true;
        if(!pago || !pago.id_pago) return;
        this.ventasService.eliminarPago(pago.id_pago).subscribe({
            next: resp => {
                button.loading = false;
                this.message.add({
                    severity: 'info',
                    summary: 'Pago eliminado',
                    detail: 'El pago del '+pago.fecha+' fue eliminado'
                });
                this.pagos = this.pagos?.filter(p => p.id_pago !== pago.id_pago);
            }
        });
    }

    public calcDeuda(): number {
        return (this.importe || 0) - (this.importePagado || 0);
    }

}

import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogGenerarReporteComponent } from '../dialog-generar-reporte/dialog-generar-reporte.component';

@Component({
    selector: 'app-table-entradas',
    templateUrl: './table-entradas.component.html',
    styleUrls: ['./table-entradas.component.css']
})
export class TableEntradasComponent {

    ref: DynamicDialogRef | undefined;

    constructor(public dialogService: DialogService) { }

    public persons = [
        { id: '001', admin: 'Ameth', date: '10/10/23', quantity: 77, product: 25, type: 'null', p_reorden: 'null' },
        { id: '001', admin: 'Ameth', date: '10/10/23', quantity: 77, product: 25, type: 'null', p_reorden: 'null' },
        { id: '001', admin: 'Ameth', date: '10/10/23', quantity: 77, product: 25, type: 'null', p_reorden: 'null' }
    ];

    showGenerarReporte() {
        this.ref = this.dialogService.open(DialogGenerarReporteComponent, { header: 'Generar Reporte' });
    }
}

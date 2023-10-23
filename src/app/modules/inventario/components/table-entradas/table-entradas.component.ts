import { Component } from '@angular/core';
import { Table } from 'primeng/table';
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
        { id: 1, admin: 'Ameth', date: '10/10/02', quantity: 62, product: 10, type: 'Type A', p_reorden: 'Low' },
        { id: 2, admin: 'Alice', date: '09/28/13', quantity: 45, product: 18, type: 'Type B', p_reorden: 'Medium' },
        { id: 3, admin: 'Eleanor', date: '08/03/05', quantity: 33, product: 7, type: 'Type C', p_reorden: 'High' }
    ];

    showGenerarReporte() {
        this.ref = this.dialogService.open(DialogGenerarReporteComponent, { header: 'Generar Reporte' });
    }

    clear(table: Table) {
        table.clear();
    }
}

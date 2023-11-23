import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { pedidos } from 'src/app/interfaces/data';
import { Pedido } from 'src/app/interfaces/pedido.interface';
import { ImportesCalcService } from '../../services/importes-calc.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { VerReporteVentaComponent } from'src/app/modules/analitica/pages/ver-reporte-venta/ver-reporte-venta.component';


@Component({
  selector: 'app-ventas-table',
  templateUrl: './ventas-table.component.html',
  styleUrls: ['./ventas-table.component.css'],
  providers: [DialogService]

})
export class VentasTableComponent implements OnInit {
    public ref: DynamicDialogRef | undefined;

    @ViewChild('tablePedidos')
    public tablePedidos: Table | undefined

    public pedidos: Pedido[] = pedidos;

    public selectedPedido: Pedido | undefined;

    public constructor(
        private router: Router,
        public importesCalc: ImportesCalcService,
        public dialogService: DialogService
    ) {}

    public ngOnInit(): void {
        if(!this.tablePedidos) return;
    }
    
    public showGenerarReporte(): void {
        this.ref = this.dialogService.open(VerReporteVentaComponent, { header: 'Generar Reporte'});
    }

    public example( evento: any ): void {
        console.log('filtro personalizado');
        console.log( evento );
    }



    public onRowSelect( event: any ): void {
        this.router.navigate([
            '/app/ventas',
            this.selectedPedido?.id_pedido
        ]);
    }

}

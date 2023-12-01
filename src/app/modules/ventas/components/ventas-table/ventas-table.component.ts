import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { pedidos } from 'src/app/interfaces/data';
import { Pedido } from 'src/app/interfaces/pedido.interface';
import { ImportesCalcService } from '../../services/importes-calc.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ReporteVentaComponent } from 'src/app/modules/analitica/components/reporte-venta.component';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-ventas-table',
  templateUrl: './ventas-table.component.html',
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
        public ventasService: VentasService
    ) { }

    public showGenerarReporte(): void {
        this.ref = this.dialogService.open(ReporteVentaComponent, {
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



    public onRowSelect( event: any ): void {
        this.router.navigate([
            '/app/ventas',
            this.selectedPedido?.id_pedido
        ]);
    }

}

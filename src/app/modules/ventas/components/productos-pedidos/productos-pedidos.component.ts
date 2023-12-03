import {  Pago, PedidoProductos } from 'src/app/interfaces/pedido.interface';
import { ImportesCalcService } from '../../services/importes-calc.service';

import { Component, OnInit, Input } from '@angular/core';
import { DialogService,DynamicDialogRef } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-productos-pedidos',
  templateUrl: './productos-pedidos.component.html',
})
export class ProductosPedidosComponent implements OnInit {

    @Input('pedidoProducto')
    public pedidoProducto: PedidoProductos[] | undefined;

    @Input('pagos')
    public pagos: Pago[] | undefined;

    private ref: DynamicDialogRef | undefined;

    public constructor(
        public importesCalc: ImportesCalcService,
        public dialogService: DialogService,
    ) {}

    ngOnInit(): void {

    }

}

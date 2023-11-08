import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { pedidos } from 'src/app/interfaces/data';
import { Pago, Pedido, PedidoProductos } from 'src/app/interfaces/pedido.interface';

@Component({
  selector: 'app-ventas-table',
  templateUrl: './ventas-table.component.html',
  styleUrls: ['./ventas-table.component.css']
})
export class VentasTableComponent implements OnInit {

    @ViewChild('tablePedidos')
    public tablePedidos: Table | undefined

    public pedidos: Pedido[] = pedidos;

    public selectedPedido: Pedido | undefined;

    public constructor(
        private router: Router
    ) {}

    public ngOnInit(): void {
        if(!this.tablePedidos) return;
    }

    public example( evento: any ): void {
        console.log('filtro personalizado');
        console.log( evento );
    }

    public calcularImportePagado( pagos: Pago[] ): number {
        return pagos.reduce( (cont, pago) =>  {
            return cont + (pago.monto || 0);
        }, 0 );
    }

    public calcularImporteDebido( productosPedidos: PedidoProductos[], pagos: Pago[] ): number {
        const pagado = pagos.reduce( (cont, pago) =>  {
            return cont + (pago.monto || 0);
        }, 0 );

        return productosPedidos.reduce( (cont, pedidoProductos) =>  {
            const cantidad_por_caja = pedidoProductos.producto?.cantidad_por_caja || 0;
            const precio_unit = pedidoProductos.producto?.precio_unit || 0;
            return cont + (cantidad_por_caja * precio_unit);
        }, 0 ) - pagado;
    }

    public onRowSelect( event: any ): void {
        this.router.navigate([
            '/dashboard/ventas',
            this.selectedPedido?.id_pedido
        ]);
    }

}

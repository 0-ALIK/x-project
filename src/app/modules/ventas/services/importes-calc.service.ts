import { Injectable } from '@angular/core';
import { Pago, PedidoProductos } from 'src/app/interfaces/pedido.interface';

@Injectable()
export class ImportesCalcService {

    public constructor() {}

    public calcularImportePagado( pagos: Pago[] ): number {
        return pagos.reduce( (cont, pago) =>  {
            return cont + (pago.monto || 0);
        }, 0 );
    }

    public calcularImporteDebido( productosPedidos: PedidoProductos[], pagos: Pago[] ): number {
        const pagado = pagos.reduce( (cont, pago) =>  {
            return cont + (pago.monto || 0);
        }, 0 );

        return this.calcularImporte( productosPedidos ) - pagado;
    }

    public calcularImporte( productosPedidos: PedidoProductos[] ): number {
        return productosPedidos.reduce( (cont, pedidoProductos) =>  {
            const cantidad_por_caja = pedidoProductos.producto?.cantidad_por_caja || 0;
            const precio_unit = pedidoProductos.producto?.precio_unit || 0;
            return cont + (cantidad_por_caja * precio_unit);
        }, 0 );
    }

}

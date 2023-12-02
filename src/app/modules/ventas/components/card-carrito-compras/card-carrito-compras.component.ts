import { Component, Input, OnInit } from '@angular/core';
import { PedidoProductos } from 'src/app/interfaces/pedido.interface';
import { Producto } from 'src/app/interfaces/producto.iterface';

@Component({
    selector: 'card-carrito-compras',
    template: `
        <section class="w-full flex h-10rem p-2 surface-card gap-2 border-round">
            <div class="hidden md:block">
                <img
                    *ngIf="pedidoProductos?.producto?.foto" alt="Foto"
                    width="200px"
                    class="h-full"
                    [src]="pedidoProductos?.producto?.foto">
                <alik-image-preview
                    *ngIf="!pedidoProductos?.producto?.foto"
                    width="200px"
                    height="100%">
                </alik-image-preview>
            </div>
            <div>
                <p class="m-0 mb-1">{{pedidoProductos?.producto?.nombre}}</p>
                <p class="m-0 mb-1">Precio unitario: {{pedidoProductos?.producto?.precio_unit | currency:'USD':'symbol':'1.2-2' }}</p>
                <p class="m-0 mb-1">Precio de caja: {{ calcPrecioCaja(pedidoProductos?.producto!) }}</p>
            </div>
        </section>
    `
})
export class CardCarritoComprasComponent implements OnInit {

    @Input('pedidoProductos')
    public pedidoProductos: PedidoProductos | undefined

    public constructor(

    ) {}

    public ngOnInit(): void {

    }

    public calcPrecioCaja(producto: Producto): number {
        if(!producto?.precio_unit || !producto?.cantidad_por_caja) return -1;
        return producto.precio_unit * producto.cantidad_por_caja;
    }

    public calcTotal(producto: Producto): number {
        if(!producto?.precio_unit || !producto?.cantidad_por_caja) return -1;
        return producto.precio_unit * producto.cantidad_por_caja;
    }

}



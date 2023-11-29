import { Component } from '@angular/core';
import { pedidos } from 'src/app/interfaces/data';
import { Pedido } from 'src/app/interfaces/pedido.interface';

@Component({
    selector: 'app-carrito-page',
    template: `
        <div>

            <card-carrito-compras
                *ngFor="let pedidoP of pedido.pedido_producto"
                [pedidoProductos]="pedidoP">
            </card-carrito-compras>

        </div>
    `
})
export class CarritoPageComponent {

    public pedido: Pedido = pedidos[0];
}

import { Component, Input, OnInit } from '@angular/core';
import { PedidoProductos } from 'src/app/interfaces/pedido.interface';

@Component({
  selector: 'card-carrito-compras',
  templateUrl: './card-carrito-compras.component.html'
})
export class CardCarritoComprasComponent implements OnInit {

    cantidad: number | undefined

    @Input('pedidoProductos')
    pedidoProductos: PedidoProductos | undefined


    ngOnInit(): void {

    }

}



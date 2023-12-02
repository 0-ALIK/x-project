import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { pedidos } from 'src/app/interfaces/data';
import { CarritoItem, Pedido, PedidoProductos } from 'src/app/interfaces/pedido.interface';
import { Producto } from 'src/app/interfaces/producto.iterface';
import { ProductoService } from 'src/app/services/producto.service';
import { ImportesCalcService } from '../services/importes-calc.service';

@Component({
    selector: 'app-carrito-page',
    template: `
        <div class="mb-2">

            <div *ngIf="carrito.length === 0">
                <p-messages [(value)]="message" [enableService]="false" [closable]="false"></p-messages>
            </div>

            <div *ngIf="carrito.length !== 0" class="ostia">
                <div [style]="{'flex': '2'}" class="flex flex-column gap-2">
                    <section class="w-full flex h-10rem p-2 surface-card gap-2 border-round justify-content-between" *ngFor="let item of carritoProductos">
                        <section class="flex gap-2">
                            <div class="hidden md:block">
                                <img
                                    *ngIf="item?.producto?.foto" alt="Foto"
                                    width="200px"
                                    class="h-full"
                                    [src]="item?.producto?.foto">
                                <alik-image-preview
                                    *ngIf="!item?.producto?.foto"
                                    width="200px"
                                    height="100%">
                                </alik-image-preview>
                            </div>
                            <div>
                                <p class="m-0 mb-1 text-lg font-bold">{{item?.producto?.nombre}}</p>
                                <p class="m-0 mb-1">Precio unitario: {{item?.producto?.precio_unit | currency:'USD':'symbol':'1.2-2' }}</p>
                                <p class="m-0 mb-2">Precio de caja: {{ calcPrecioCaja(item?.producto!) | currency:'USD':'symbol':'1.2-2' }}</p>
                                <div>
                                    <p class="m-0 mb-1">Cantidad</p>
                                    <div class="flex gap-1">
                                        <p-button
                                            (onClick)="modificarCantidad(item, 1)"
                                            icon="pi pi-plus">
                                        </p-button>
                                        <div class="surface-50 border-round flex justify-content-center align-items-center w-2rem h-2rem">{{item.cantidad}}</div>
                                        <p-button
                                            (onClick)="modificarCantidad(item, -1)"
                                            icon="pi pi-minus">
                                        </p-button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div>
                            <p>Total: {{ calcTotal(item?.producto!, item?.cantidad!) | currency:'USD':'symbol':'1.2-2'}}</p>
                            <p-button
                                (onClick)="quitarDelCarro( item )"
                                icon="pi pi-trash">
                            </p-button>
                        </div>
                    </section>
                </div>
                <div [style]="{'flex': '1'}" class="surface-50 border-round p-2">
                    <h2 class="m-0 mb-4 text-xl">Detalles del carrito</h2>
                    <p class="m-0 mb-1">Subtotal {{ importes.calcularImporte(carritoProductos) | currency:'USD':'symbol':'1.2-2'}}</p>
                    <p class="m-0 mb-1">Descuento {{ 0 | currency:'USD':'symbol':'1.2-2' }}</p>
                    <p class="m-0 mb-4">Total {{ importes.calcularImporte(carritoProductos) | currency:'USD':'symbol':'1.2-2' }}</p>

                    <p-button
                        styleClass="w-full"
                        label="Realizar pedido"
                        icon="pi pi-shopping-cart">
                    </p-button>
                </div>
            </div>

        </div>
    `,
    styles:[`

        .ostia {
            display: flex;
            flex-direction: column;
            gap: var(--spacing-2);
        }

        @media (min-width: 768px) {
            .ostia {
                flex-direction: row;
            }
        }
    `]
})
export class CarritoPageComponent implements OnInit {

    public productos: Producto[] = [];

    public carrito: CarritoItem[] = [];

    public carritoProductos: PedidoProductos[] = [];

    public message: Message[] = [{
        severity: 'info',
        summary: 'Info',
        detail: 'No tienes productos en el carrito'
    }];

    public constructor(
        private productoService: ProductoService,
        public importes: ImportesCalcService
    ) {}

    ngOnInit(): void {
        if(!localStorage.getItem('carrito')) return;

        this.carrito = JSON.parse( localStorage.getItem('carrito') || '');

        this.productoService.getAllProductos().subscribe({
            next: (productos) => {
                this.productos = productos;

                this.carritoProductos = this.carrito.map(item => {
                    const producto = productos.find(p => p.id_producto === item.producto_id);
                    return {
                        producto,
                        cantidad: item.cantidad
                    }
                });

                console.log(this.carritoProductos);
            }
        });
    }

    public modificarCantidad(pedidoProducto: PedidoProductos, cantidad: number): void {
        if(!pedidoProducto.cantidad || !pedidoProducto.producto) return;
        if(cantidad < 0 && pedidoProducto.cantidad < 2) return;

        pedidoProducto.cantidad += cantidad;
        this.carrito = this.carrito.map(item => {

            if(item.producto_id === pedidoProducto.producto?.id_producto) {
                item.cantidad = pedidoProducto.cantidad || 1;
            }
            return item;
        });

        localStorage.setItem('carrito', JSON.stringify(this.carrito));
    }

    public calcPrecioCaja(producto: Producto): number {
        if(!producto.precio_unit || !producto.cantidad_por_caja) return -1;
        return producto.precio_unit * producto.cantidad_por_caja;
    }

    public calcTotal(producto: Producto, cantidad: number): number {
        return this.calcPrecioCaja(producto) * cantidad;
    }

    public quitarDelCarro( pedidoProducto: PedidoProductos ): void {
        this.carritoProductos = this.carritoProductos.filter(c => c.producto?.id_producto !== pedidoProducto.producto?.id_producto);
        this.carrito = this.carrito.filter(i => i.producto_id !== pedidoProducto.producto?.id_producto);
        localStorage.setItem('carrito', JSON.stringify(this.carrito));
    }

}

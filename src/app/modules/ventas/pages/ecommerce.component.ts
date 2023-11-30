import { Component } from '@angular/core';
import { productos } from 'src/app/interfaces/data';
import { Producto } from 'src/app/interfaces/producto.iterface';

@Component({
    selector: 'app-ecommerce',
    template: `
        <main class="border-round p-2 w-full" [style]="{'background': 'var(--surface-card)'}">

            <div class="flex align-items-center gap-2 mb-2 w-full">
                <span class="p-input-icon-left w-full">
                    <i class="pi pi-search"></i>
                    <input
                        class="w-full"
                        type="text"
                        pInputText
                        [(ngModel)]="value">
                </span>
                <p-button label="Search"></p-button>
            </div>


            <div class="responsive gap-2">
                <p-card
                    *ngFor="let producto of productos"
                    [header]="producto.nombre"
                    [subheader]="producto.marca.nombre">
                    <ng-template pTemplate="header">
                        <img alt="Foto" [src]="producto.foto">
                    </ng-template>
                    <section>
                        <div>
                            <p class="m-0">
                                Precio unitario:
                                <span class="font-bold">
                                    {{producto.precio_unit | currency:'USD':'symbol':'1.2-2' }}
                                </span>
                            </p>
                        </div>
                        <div>
                            <p class="m-0">
                                Precio de caja:
                                <span class="font-bold">
                                    {{ calcPrecioCaja(producto) | currency:'USD':'symbol':'1.2-2' }}
                                </span>
                            </p>
                        </div>
                    </section>
                    <ng-template pTemplate="footer">
                        <p-button
                            icon="pi pi-cart-plus">
                        </p-button>
                    </ng-template>
                </p-card>
            </div>
        </main>
    `,
    styles: [`
        .responsive {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        }
    `]
})
export class EcommerceComponent {

    public productos: Producto[] = productos;

    public value: string = '';

    public calcPrecioCaja(producto: Producto): number {
        if(!producto.precio_unit || !producto.cantidad_por_caja) return -1;
        return producto.precio_unit * producto.cantidad_por_caja;
    }
}

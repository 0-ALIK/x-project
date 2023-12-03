import { Component, OnInit } from '@angular/core';
import { CarritoItem } from 'src/app/interfaces/pedido.interface';
import { Categoria, Marca, Producto } from 'src/app/interfaces/producto.iterface';
import { CategoriaService } from 'src/app/services/categoria.service';
import { MarcasService } from 'src/app/services/marcas.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
    selector: 'app-ecommerce',
    template: `
        <main class="border-round p-2 w-full" [style]="{'background': 'var(--surface-card)'}">

            <div>
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
                <div class="flex align-items-center gap-2 mb-2 w-full">
                    <p-dropdown
                        (onChange)="selectCategoriasChange($event)"
                        [showClear]="true"
                        placeholder="Categorias"
                        [options]="categorias"
                        optionLabel="nombre">
                    </p-dropdown>
                    <p-dropdown
                        (onChange)="selectMarcasChange($event)"
                        [options]="marcas"
                        [showClear]="true"
                        placeholder="Marcas"
                        optionLabel="nombre">
                        <ng-template let-marca pTemplate="item">
                            <div [style]="{'display': 'flex', 'alignItems': 'center', 'gap': 'var(--spacing-2)'}" >
                                <img [src]="marca.logo" style="width: 18px">
                                <div>{{ marca.nombre }}</div>
                            </div>
                        </ng-template>
                    </p-dropdown>
                </div>
            </div>


            <div class="responsive gap-2">
                <p-card
                    *ngFor="let producto of productos"
                    [header]="producto.nombre"
                    [subheader]="producto.marca.nombre">
                    <ng-template pTemplate="header">
                        <img *ngIf="producto.foto" alt="Foto" [src]="producto.foto">
                        <alik-image-preview *ngIf="!producto.foto" width="100%"></alik-image-preview>
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
                        <div class="flex gap-2">
                            <p-button
                                (onClick)="agregarCarro( producto )"
                                [disabled]="estaProductoEnCarro( producto )"
                                icon="pi pi-cart-plus">
                            </p-button>
                            <p-button
                                (onClick)="quitarDelCarro( producto )"
                                *ngIf="estaProductoEnCarro( producto )"
                                icon="pi pi-minus">
                            </p-button>
                        </div>
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
export class EcommerceComponent implements OnInit {

    public productos: Producto[] = [];

    public productosCopy: Producto[] = [];

    public carrito: CarritoItem[] = []

    public marcas: Marca[] = [];

    public categorias: Categoria[] = [];

    public value: string = '';

    public constructor(
        private productoService: ProductoService,
        private marcaService: MarcasService,
        private categoriaService: CategoriaService,
    ) {}

    public ngOnInit(): void {
        if(localStorage.getItem('carrito')) {
            this.carrito = JSON.parse( localStorage.getItem('carrito') || '');
        }

        this.productoService.getAllProductos().subscribe({
            next: (productos) => {
                this.productos = productos;
                this.productosCopy = productos;
            }
        });

        this.marcaService.getMarcas().subscribe({
            next: (response: any) => {
                this.marcas = response.data;
            }
        });

        this.categoriaService.getCategorias().subscribe({
            next: (response: any) => {
                this.categorias = response.data;
            }
        });
    }

    public estaProductoEnCarro(producto: Producto): boolean {
        if(!producto.id_producto) return false;
        return this.carrito.some( item => item.producto_id === producto.id_producto);
    }

    public agregarCarro(producto: Producto): void {
        if(!producto.id_producto) return;

        this.carrito.push({
            producto_id: producto.id_producto,
            cantidad: 1
        });

        localStorage.setItem('carrito', JSON.stringify( this.carrito ));
    }

    public quitarDelCarro( producto: Producto ) {
        if(!producto.id_producto) return;

        this.carrito = this.carrito.filter( item => item.producto_id !== producto.id_producto);

        localStorage.setItem('carrito', JSON.stringify( this.carrito ));
    }

    public selectCategoriasChange(event: any): void {
        if(!event.value) {
            this.productos = this.productosCopy;
            return;
        }

        const categoria: Categoria = event.value;
        this.productos = this.productos.filter(p => p.categoria.id_categoria === categoria.id_categoria);
    }

    public selectMarcasChange(event: any): void {
        if(!event.value) {
            this.productos = this.productosCopy;
            return;
        }

        const marca: Marca = event.value;
        this.productos = this.productos.filter(p => p.marca.id_marca === marca.id_marca);
    }

    public calcPrecioCaja(producto: Producto): number {
        if(!producto.precio_unit || !producto.cantidad_por_caja) return -1;
        return producto.precio_unit * producto.cantidad_por_caja;
    }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { compras, productos } from 'src/app/interfaces/data';
import { Producto } from 'src/app/interfaces/producto.iterface';
import { Compra } from 'src/app/interfaces/pedido.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
    selector: 'app-dialog-realizar-compra',
    templateUrl: './dialog-realizar-compra.component.html',
    styleUrls: ['./dialog-realizar-compra.component.css']
})
export class DialogRealizarCompraComponent {

    public productos: Producto[] | undefined;

    public estaCargando: boolean = false;

    public form: FormGroup = this.formBuilder.group({
        fecha: [new Date()],
        producto: [],
        cantidad: [],
    });

    public constructor (
        private formBuilder: FormBuilder,
        private productoService: ProductoService
    ) { }

    public ngOnInit(): void {
        this.obtenerProductos();
    }

    public enviarFormulario(): void {

    }

    //obtiene todos los productos
    private obtenerProductos(): void {
        this.productoService.getProductos().subscribe(
            (productos: any) => {
                this.productos = productos.data;
        });
    }
}

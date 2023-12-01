import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { compras, productos } from 'src/app/interfaces/data';
import { Producto } from 'src/app/interfaces/producto.iterface';

@Component({
    selector: 'app-dialog-realizar-compra',
    templateUrl: './dialog-realizar-compra.component.html',
    styleUrls: ['./dialog-realizar-compra.component.css']
})
export class DialogRealizarCompraComponent {

    public productos: Producto[] = productos;

    public estaCargando: boolean = false;

    public form: FormGroup = this.formBuilder.group({
        fecha: [new Date()],
        producto: [],
        cantidad: [],
    });

    public constructor (
        private formBuilder: FormBuilder
    ) {}

    public enviarFormulario(): void {

    }
}

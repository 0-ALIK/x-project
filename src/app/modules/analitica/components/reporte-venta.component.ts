import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { clientes, pedidoEstados, productos, provincias } from 'src/app/interfaces/data';
import { Provincia } from 'src/app/interfaces/direccion.interface';
import { PedidoEstado } from 'src/app/interfaces/pedido.interface';
import { Producto } from 'src/app/interfaces/producto.iterface';
import { Cliente } from 'src/app/interfaces/usuario.inteface';

@Component({
    selector: 'alik-reporte-venta',
    template: `
        <form class="flex flex-column" [formGroup]="form">
            <div class="mb-2">
                <label class="block">Provincias</label>
                <p-dropdown
                    formControlName="provincia"
                    [options]="provincias"
                    optionLabel="nombre">
                </p-dropdown>
            </div>

            <div class="mb-2">
                <label class="block">Productos</label>
                <p-multiSelect
                    [options]="productos"
                    formControlName="productos"
                    optionLabel="nombre" placeholder="Seleciona los productos">
                </p-multiSelect>
            </div>

            <div class="mb-2">
                <label class="block">Genero</label>
                <div class="flex flex-wrap gap-3">
                    <div class="flex align-items-center">
                        <p-radioButton
                            formControlName="genero"
                            value="M"
                            inputId="genero1">
                        </p-radioButton>
                        <label for="genero1" class="ml-2">Mujeres</label>
                    </div>
                    <div class="flex align-items-center">
                        <p-radioButton
                            formControlName="genero"
                            value="H"
                            inputId="genero2">
                        </p-radioButton>
                        <label for="genero2" class="ml-2">Hombres</label>
                    </div>
                </div>
            </div>

            <div class="mb-2">
                <label class="block">Clientes</label>
                <p-multiSelect
                    [options]="clientes"
                    formControlName="clientes"
                    optionLabel="nombre" placeholder="Seleciona los clientes">
                </p-multiSelect>
            </div>

            <div class="mb-2">
                <label class="block">Estado</label>
                <p-dropdown
                    formControlName="estado"
                    [options]="estados"
                    optionLabel="estado">
                </p-dropdown>
            </div>

            <p-button label="Generar reporte"></p-button>
        </form>
    `,
})
export class ReporteVentaComponent {

    public form: FormGroup = this.formBuilder.group({
        'provincia': [],
        'productos': [],
        'genero': [],
        'clientes': [],
        'estado': []
    });

    public provincias: Provincia[] = provincias;

    public productos: Producto[] = productos;

    public clientes: Cliente[] = clientes;

    public estados: PedidoEstado[] = pedidoEstados;

    public constructor(
        private formBuilder: FormBuilder
    ) {}
}

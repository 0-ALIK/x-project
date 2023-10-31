import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { categorias, marcas, productos } from 'src/app/interfaces/data';
import { Categoria, Marca, Producto } from 'src/app/interfaces/producto.iterface';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
    currentFiles: File[];
}

@Component({
    selector: 'app-agregar-producto',
    templateUrl: './agregar-producto.component.html',
    styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

    public imagePreview: string | undefined;

    public foto: File | undefined;

    public currentProducto: Producto | undefined;

    public marcas: Marca[] | undefined;

    public categorias: Categoria[] | undefined;

    public labelButton: string = 'Agregar producto';

    public estaCargando: boolean = false;

    public form: FormGroup = this.formBuilder.group({
        nombre: ['', [Validators.required]],
        precio_unit: [0, [Validators.required]],
        cantidad_cajas: [0, [Validators.required]],
        categoria: [null , [Validators.required]],
        marca: [null , [Validators.required]],
        punto_reorden: [0, [Validators.required]],
    });

    public constructor(
        private messageService: MessageService,
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private location: Location
    ) {}

    public ngOnInit(): void {
        if( this.esEdicion() ) {
            this.labelButton = 'Guardar cambios';
            this.obtenerProductoEditar();
        }

        this.obtenerMarcasCategoria();

        console.log('on init no implementado');
    }

    public enviarFormulario(): void {
        this.estaCargando = true;
        setTimeout(() => {
            this.estaCargando = false;
        }, 2000);
    }

    public selectFile( event: UploadEvent ): void {
        this.foto = event.currentFiles[0]
        this.imagePreview = URL.createObjectURL( this.foto );
    }

    //TODO: modificar luego
    private obtenerProductoEditar(): void {

        this.activatedRoute.params.subscribe({
            next: ({id}) => {

                this.currentProducto = productos.find( p => p.id_producto === Number(id) );

                if(!this.currentProducto) return;

                this.form.setValue({
                    nombre: this.currentProducto.nombre,
                    precio_unit: this.currentProducto.precio_unit,
                    cantidad_cajas: this.currentProducto.cantidad_cajas,
                    categoria: this.currentProducto.categoria,
                    marca: this.currentProducto.marca,
                    punto_reorden: this.currentProducto.punto_reorden,
                });
                this.imagePreview = this.currentProducto.foto;
            }
        });
    }

    //TODO: modificar luego
    private obtenerMarcasCategoria(): void {
        setTimeout(() => {
            this.marcas = marcas;
            this.categorias = categorias;
        }, 2000);
    }

    private esEdicion(): boolean {
        const parts = this.location.path().split('/');
        const lastPart = parts[ parts.length - 1 ];
        return /^-?\d*\.?\d+$/.test(lastPart);
    }
}

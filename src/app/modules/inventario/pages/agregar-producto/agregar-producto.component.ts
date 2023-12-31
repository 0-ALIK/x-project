import { Location } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { categorias, marcas, productos } from 'src/app/interfaces/data';
import { Categoria, Marca, Producto } from 'src/app/interfaces/producto.iterface';
import { DOCUMENT } from '@angular/common';

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

    public titulo: string = 'Agregar nuevo producto'

    public imagePreview: string | undefined;

    public foto: File | undefined;

    public currentProducto: Producto | undefined;

    public marcas: Marca[] | undefined;

    public categorias: Categoria[] | undefined;

    public labelButton: string = 'Agregar producto';

    public estaCargando: boolean = false;

    public options: any;

    public data: any;

    public mesesDelAnio = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ];

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
        private location: Location,
        @Inject(DOCUMENT) private document: Document
    ) {}

    public ngOnInit(): void {
        if( this.esEdicion() ) {
            this.labelButton = 'Guardar cambios';
            this.obtenerProductoEditar();
        }

        this.obtenerMarcasCategoria();

        this.definirOptionsGraficos();
        this.definirDataGraficos();
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

                this.titulo = 'Editar producto ' + this.currentProducto.nombre;

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

    private definirOptionsGraficos(): void {
        const documentStyle = getComputedStyle(this.document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }

    private definirDataGraficos(): void {
        const documentStyle = getComputedStyle(this.document.documentElement);
        this.data = {
            labels: this.mesesDelAnio,
            datasets: [
                {
                    label: 'Entradas por mes del producto',
                    data: [0, 0, 20, 1, 5, 65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    tension: 0.4,
                },
                {
                    label: 'Salidas por mes del producto',
                    data: [0, 0, 5, 5, 2, 1, 2, 14, 4, 0, 4, 2],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--green-500'),
                    tension: 0.4
                },
            ]
        };
    }
}

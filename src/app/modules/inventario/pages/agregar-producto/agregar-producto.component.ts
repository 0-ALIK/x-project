import { Location } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Categoria, Marca, Producto } from 'src/app/interfaces/producto.iterface';
import { DOCUMENT } from '@angular/common';
import { ProductoService } from 'src/app/services/producto.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { MarcasService } from 'src/app/services/marcas.service';

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
        cantidad_por_caja: [0, [Validators.required]],
        categoria: [null , [Validators.required]],
        marca: [null, [Validators.required]],
        punto_reorden: [0, [Validators.required]],
    });

    public constructor(
        private messageService: MessageService,
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private location: Location,
        private productoService: ProductoService,
        private marcaService: MarcasService,
        private categoriaService: CategoriaService,
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
        if (this.form.valid) {
            const formData: FormData = new FormData();
    
            formData.append('nombre', this.form.get('nombre')?.value || '');
            formData.append('precio_unit', String(this.form.get('precio_unit')?.value || 0));
            formData.append('cantidad_cajas', String(this.form.get('cantidad_cajas')?.value || 0));
            formData.append('cantidad_por_caja', String(this.form.get('cantidad_por_caja')?.value || 0));
            formData.append('punto_reorden', String(this.form.get('punto_reorden')?.value || 0));
            
            // Agregar la imagen solo si se ha seleccionado una nueva
            if (this.foto) {
                formData.append('foto', this.foto);
            }
    
            // Agregar el ID de la categoría solo si está seleccionada
            const categoriaId = this.form.get('categoria')?.value;
            if (categoriaId) {
                formData.append('categoria_id', String(categoriaId));
            }
            console.log(categoriaId);
            // Agregar el ID de la marca solo si está seleccionada
            const marcaId = this.form.get('marca')?.value;
            if (marcaId) {
                formData.append('marca_id', String(marcaId));
            }
            console.log(marcaId);

            this.productoService.guardarProducto(formData).subscribe(
                (response) => {
                    // Manejar la respuesta del servicio
                    console.log('Producto guardado con éxito:', response);
                    this.messageService.add({severity:"success", summary: "Operación Exitosa", detail:"Producto guardado con éxito" })
                    // Puedes redirigir o hacer otras acciones después de guardar
                },
                (error) => {
                    console.error('Error al guardar el producto:', error);
                    this.messageService.add({severity:"error", summary: "Operación Fallida", detail:"Producto no se ha podido guardar" })
                    // Manejar el error, mostrar mensajes, etc.
                }
            );
        }
    }
    
    
    
    

    public selectFile( event: UploadEvent ): void {
        this.foto = event.currentFiles[0]
        this.imagePreview = URL.createObjectURL( this.foto );
    }

    //TODO: modificar luego
    private obtenerProductoEditar(): void {

        this.activatedRoute.params.subscribe({
            next: ({id}) => {

                this.productoService.getProducto(Number(id)).subscribe(
                    (producto: any) => {
                        console.log(producto)

                        this.currentProducto = producto.data;


                        if (!this.currentProducto) return;
                        console.log(this.currentProducto.categoria)

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
                );
            }
        });
    }

    //TODO: modificar luego
    private obtenerMarcasCategoria(): void {
        this.marcaService.getMarcas().subscribe( (marcas: any) => {
            this.categoriaService.getCategorias().subscribe( (categorias: any) => {
                setTimeout(() => {
                    this.marcas = marcas.data;
                    this.categorias = categorias.data;
                }, 2000);
            });
        });
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

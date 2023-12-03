import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Marca, Producto } from 'src/app/interfaces/producto.iterface';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogVerMarcasComponent } from '../../components/dialog-ver-marcas/dialog-ver-marcas.component';
import { MarcasService } from 'src/app/services/marcas.service';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
    currentFiles: File[];
}

@Component({
    selector: 'app-agregar-marca',
    templateUrl: './agregar-marca.component.html',
    styleUrls: ['./agregar-marca.component.css']
})
export class AgregarMarcaComponent implements OnInit {

    public titulo: string = 'Agregar nueva marca';

    public imagePreview: string | undefined;

    public currentMarca: Marca | undefined;

    public foto: File | undefined;

    public estaCargando: boolean = false;

    public labelButton1: string = 'Ver marcas';

    public labelButton2: string = 'Agregar marca';

    public productos: Producto[] | undefined;

    private ref: DynamicDialogRef | undefined;

    public form: FormGroup = this.formBuilder.group({
        nombre: ['', [Validators.required]],
        descripcion: ['', [Validators.required]],
    });

    constructor(
        private messageService: MessageService,
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private location: Location,
        public dialogService: DialogService,
        private marcaService: MarcasService
    ) {}

    public ngOnInit(): void {
        if( this.esEdicion() ) {
            this.labelButton2 = 'Guardar cambios';
            this.obtenerMarcaEditar()
        }
    }

    public enviarFormulario(): void {
        this.estaCargando = true;

        if (this.form.valid) {
            const formData: FormData = new FormData()
            formData.append('nombre', this.form.get('nombre')?.value || '')
            formData.append('descripcion', this.form.get('descripcion')?.value || '')

            if (this.foto) {
                formData.append('logo', this.foto)
            } else {

                if (this.currentMarca?.logo) {
                    //aqui va cuando no se selecciona una foto
                    //tienes que convertir la misma foto en archivo
                    //para cuando llegue al back lo interprete que es un archivo
                    // const file = new File(this.currentMarca?.logo);

                    // formData.append('logo', file);
                }
            }

            if (this.esEdicion()) {
                this.activatedRoute.params.subscribe({
                    next: ({ id }) => {
                        // Edita una marca existente.
                        this.marcaService.updateMarca(formData, Number(id)).subscribe(
                            response => {
                                console.log(response.data)
                                this.estaCargando = false;
                                this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.data.nombre + ' actualizada'});
                            },
                            error => {
                                this.estaCargando = false;
                                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo actualizar la marca' });
                            }
                        );
                    }
                });
            } else {
                this.marcaService.guardarMarca(formData).subscribe(
                    (response: any) => {
                        if (response.status !== 201) {
                            this.estaCargando = false;
                            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo agregar la marca' + formData.get('nombre') });
                        } else {
                            this.estaCargando = false;
                            this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'La marca ' + response.data.nombre + ' ha sido agregada' });
                        }
                    }
                );
            }
        }
    }

    public selectFile(event: UploadEvent): void {
        this.foto = event.currentFiles[0]
        this.imagePreview = URL.createObjectURL( this.foto );
    }

    public eliminarProducto( producto: Producto ): void {

    }

    private obtenerMarcaEditar(): void {
        this.activatedRoute.params.subscribe({
            next: ({id}) => {
                this.marcaService.getMarca(Number(id)).subscribe(
                    (marcas: any) => {
                        this.currentMarca = marcas.data;

                        if(!this.currentMarca) return;

                        this.titulo = 'Editar marca ' + this.currentMarca.nombre;

                        this.form.setValue({
                            nombre: this.currentMarca.nombre,
                            descripcion: this.currentMarca.descripcion
                        });
                        this.imagePreview = this.currentMarca.logo;
                    }
                );
            }
        });
    }

    private esEdicion(): boolean {
        const parts = this.location.path().split('/');
        const lastPart = parts[ parts.length - 1 ];
        return /^-?\d*\.?\d+$/.test(lastPart);
    }

    public verMarcas(): void {
        this.ref = this.dialogService.open(DialogVerMarcasComponent, {
            header: 'Marcas',
        });

        this.ref.onClose.subscribe((categoria: any) => {
            if(!categoria) {
                // agrega mensaje de error
                return;
            }

            // agrega mensaje de realizad
        });
    }

}

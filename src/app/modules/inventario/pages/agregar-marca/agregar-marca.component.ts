import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { marcas, productos } from 'src/app/interfaces/data';
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

    public productos: Producto[] = productos;

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
        setTimeout(() => {
            this.estaCargando = false;
        }, 2000);
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

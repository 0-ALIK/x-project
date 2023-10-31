import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { marcas } from 'src/app/interfaces/data';
import { Marca } from 'src/app/interfaces/producto.iterface';

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

    public labelButton: string = 'Agregar marca';

    public form: FormGroup = this.formBuilder.group({
        nombre: ['', [Validators.required]],
        descripcion: ['', [Validators.required]],
    });

    constructor(
        private messageService: MessageService,
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private location: Location
    ) {}

    public ngOnInit(): void {
        if( this.esEdicion() ) {
            this.labelButton = 'Guardar cambios';
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

    private obtenerMarcaEditar(): void {
        this.activatedRoute.params.subscribe({
            next: ({id}) => {
                this.currentMarca = marcas.find( m => m.id_marca === Number(id) );

                if(!this.currentMarca) return;

                this.titulo = 'Editar marca ' + this.currentMarca.nombre;

                this.form.setValue({
                    nombre: this.currentMarca.nombre,
                    descripcion: this.currentMarca.descripcion
                });
                this.imagePreview = this.currentMarca.logo;
            }
        });
    }

    private esEdicion(): boolean {
        const parts = this.location.path().split('/');
        const lastPart = parts[ parts.length - 1 ];
        return /^-?\d*\.?\d+$/.test(lastPart);
    }
}

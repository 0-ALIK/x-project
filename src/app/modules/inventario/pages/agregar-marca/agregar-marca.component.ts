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

    public imagePreview: string | undefined;

    public currentMarca: Marca | undefined;

    public form: FormGroup = this.formBuilder.group({
        nombre: ['', [Validators.required]],
        desc: ['', [Validators.required]],

    });

    constructor(
        private messageService: MessageService,
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private location: Location
    ) {}

    public ngOnInit(): void {
        if( this.esEdicion() ) {

        }
    }

    public selectFile(event: UploadEvent): void {

    }

    private obtenerProductoEditar(): void {
        this.activatedRoute.params.subscribe({
            next: ({id}) => {
                this.currentMarca = marcas.find( m => m.id_marca === Number(id) );
            }
        });
    }

    private esEdicion(): boolean {
        const parts = this.location.path().split('/');
        const lastPart = parts[ parts.length - 1 ];
        return /^-?\d*\.?\d+$/.test(lastPart);
    }
}

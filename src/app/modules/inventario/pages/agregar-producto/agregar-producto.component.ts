import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { productos } from 'src/app/interfaces/data';
import { Producto } from 'src/app/interfaces/producto.iterface';

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

    public imagePreview: string | undefined = '12asdsa';

    public foto: File | undefined;

    public currentProducto: Producto | undefined;

    public form = this.formBuilder.group([]);

    public constructor(
        private messageService: MessageService,
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private location: Location
    ) {}

    public ngOnInit(): void {
        if( this.esEdicion() ) {
            this.obtenerProductoEditar();
        }

        console.log('on init no implementado');
    }

    public selectFile( event: UploadEvent ): void {
        this.foto = event.currentFiles[0]
        this.imagePreview = URL.createObjectURL( this.foto );
    }

    private obtenerProductoEditar(): void {
        this.activatedRoute.params.subscribe({
            next: ({id}) => {
                this.currentProducto = productos.find( p => { p.id_producto === id } );
            }
        });
    }

    private esEdicion(): boolean {
        const parts = this.location.path().split('/');
        const lastPart = parts[ parts.length - 1 ];
        return /^-?\d*\.?\d+$/.test(lastPart);
    }
}

import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ReclamosService } from '../../tickets/services/tickets.service';
import { ReclamoCategoria } from 'src/app/interfaces/raclamo.interface';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
    currentFiles: File[];
}

@Component({
    selector: 'agregar-reclamo',
    template: `
        <div>
            <p-dropdown
                [options]="categorias"
                [(ngModel)]="categoria"
                [ngModelOptions]="{standalone: true}"
                optionLabel="categoria"
                [showClear]="true"
                placeholder="Selecciona una categoría">
            </p-dropdown>

            <textarea
                [(ngModel)]="detalles"
                placeholder="Detalles del reclamo"
                pInputTextarea
                [autoResize]="true" class="w-full h-10rem mb-2">
            </textarea>

            <p-fileUpload
                [showUploadButton]="false"
                [showCancelButton]="false"
                (onSelect)="selectFile( $event )"
                (onRemove)="documento = undefined;"
                [multiple]="false"
                accept=".pdf"
                [maxFileSize]="1000000">
            </p-fileUpload>

            <p-button
                label="Agregar Reclamo"
                [loading]="loading"
                icon="pi pi-ticket"
                [disabled]="disabled()"
                (onClick)="agregarSugerencia()">
            </p-button>
        </div>
    `
})
export class AgregarReclamoComponent implements AfterViewInit, OnInit {

    public documento: File | undefined;

    public categorias: ReclamoCategoria[] = [];

    public categoria: ReclamoCategoria | undefined;

    public detalles: string = '';

    public loading: boolean = false;

    public pedidoid: number | undefined;

    public clienteid: number | undefined;

    public constructor(
        public ref: DynamicDialogRef,
        public config: DynamicDialogConfig,
        private reclamoService: ReclamosService
    ) {}

    public ngOnInit(): void {

        if(!this.config.data || !this.config.data.cliente_id || !this.config.data.pedido_id) return;
        this.clienteid = this.config.data.cliente_id;
        this.pedidoid = this.config.data.pedido_id;
    }

    public ngAfterViewInit(): void {
        this.reclamoService.getReclamoCategorias().subscribe({
            next: resp => {
                this.categorias = resp.data;
            }
        });
    }

    public agregarSugerencia(): void {
        const formData = new FormData();
        if(!this.pedidoid || !this.categoria || !this.categoria.id_r_categoria) return;
        this.loading = true;

        formData.append('pedido_id', this.pedidoid.toString());
        formData.append('categoria', this.categoria.id_r_categoria.toString());
        formData.append('descripcion', this.detalles);

        if(this.documento)
            formData.append('evidencia', this.documento);

        this.reclamoService._agregarReclamo(formData).subscribe({
            next: resp => {
                console.log(resp);
                this.loading = false;
                this.ref.close(resp.mensaje);
            },
            error: error => {
                console.log(error);
                this.loading = false;
                this.ref.close();
            }
        });


        this.categoria = undefined;
        this.detalles = '';
    }

    public selectFile( event: UploadEvent ): void {
        this.documento = event.currentFiles[0]
    }

    public disabled(): boolean {
        return (!this.categoria) || (!this.detalles || this.detalles.length < 1);
    }

}

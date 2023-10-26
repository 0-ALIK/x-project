import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
    selector: 'app-dialog-agregar-categoria',
    templateUrl: './dialog-agregar-categoria.component.html',
    styleUrls: ['./dialog-agregar-categoria.component.css']
})
export class DialogAgregarCategoriaComponent {

    public value: string = '';

    public loading: boolean = false;

    public constructor(
        public ref: DynamicDialogRef
    ) {}

    public agregar(): void {
        this.loading = true;
        this.loading = false;
        this.cerrarDynamicDialog();
    }

    public cerrarDynamicDialog( categoria?: any ): void {
        this.ref.close( categoria );
    }

}

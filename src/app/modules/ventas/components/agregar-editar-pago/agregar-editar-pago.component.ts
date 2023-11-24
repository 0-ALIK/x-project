import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
    selector: 'app-agregar-pago',
    templateUrl: './agregar-editar-pago.component.html',
})
export class AgregarEditarPagoComponent {

    public constructor(
        public ref: DynamicDialogRef
    ) {}


}

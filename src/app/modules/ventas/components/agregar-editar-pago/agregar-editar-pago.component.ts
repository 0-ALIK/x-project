import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { formasPago } from 'src/app/interfaces/data';
import { FormaPago } from 'src/app/interfaces/pedido.interface';

@Component({
    selector: 'app-agregar-pago',
    template: `
        <form class="flex flex-column gap-2">
            <p-inputNumber
                [(ngModel)]="monto"
                inputId="currency-us"
                mode="currency"
                currency="USD"
                locale="en-US">
            </p-inputNumber>

            <p-dropdown
                [options]="formasPago"
                [(ngModel)]="formaPago"
                optionLabel="nombre"
                [showClear]="true"
                placeholder="Seleciona una forma de pago">
            </p-dropdown>

            <p-button label="Agregar pago"></p-button>
        </form>
    `,
})
export class AgregarEditarPagoComponent implements OnInit {

    public monto: number = 0;

    public formasPago: FormaPago[] = formasPago;

    public formaPago: FormaPago | undefined;

    public constructor(
        public ref: DynamicDialogRef
    ) {}

    public ngOnInit(): void {

    }

}

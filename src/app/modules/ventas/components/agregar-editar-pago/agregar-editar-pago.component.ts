import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormaPago } from 'src/app/interfaces/pedido.interface';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
    selector: 'app-agregar-pago',
    template: `
        <form class="flex flex-column gap-2">
            <p-inputNumber
                [(ngModel)]="monto"
                [ngModelOptions]="{standalone: true}"
                inputId="currency-us"
                mode="currency"
                currency="USD"
                locale="en-US">
            </p-inputNumber>

            <p-dropdown
                [options]="formasPago"
                [(ngModel)]="formaPago"
                [ngModelOptions]="{standalone: true}"
                optionLabel="nombre"
                [showClear]="true"
                placeholder="Seleciona una forma de pago">
            </p-dropdown>

            <p-button
                (onClick)="agregarPago()"
                label="Agregar pago"
                [loading]="loading"
                [disabled]="montoSePasa()">
            </p-button>
        </form>
    `,
})
export class AgregarEditarPagoComponent implements OnInit, AfterViewInit {

    public monto: number = 0;

    public formasPago: FormaPago[] = [];

    public formaPago: FormaPago | undefined;

    public debido!: number;

    public loading: boolean = false;

    public pedidoid!: number;

    public constructor(
        public ref: DynamicDialogRef,
        public config: DynamicDialogConfig,
        private ventasService: VentasService
    ) {}

    ngAfterViewInit(): void {
        this.ventasService.getFormasPago().subscribe({
            next: formasPago => this.formasPago = formasPago
        });
    }

    public ngOnInit(): void {
        if(!this.config.data || !this.config.data.debido || !this.config.data.pedidoid) return;
        this.debido = this.config.data.debido;
        this.pedidoid = this.config.data.pedidoid;
    }

    public agregarPago(): void {
        this.loading = true;
        const data = {
            monto: this.monto,
            forma_pago_id: this.formaPago?.id_forma_pago
        }

        this.ventasService.agregarPago(data, this.pedidoid).subscribe({
            next: (pago) => {
                this.loading = false;
                this.ref.close(pago);
            },
            error: (error) => {
                this.loading = false;
                console.log(error);
                this.ref.close();
            }
        });
    }

    public montoSePasa(): boolean {
        return (this.monto > this.debido) || (this.monto <= 0) || (!this.formaPago);
    }

}

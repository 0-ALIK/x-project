import { Component, Input } from '@angular/core';
import { Pago } from 'src/app/interfaces/pedido.interface';
import { ImportesCalcService } from '../../services/importes-calc.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AgregarEditarPagoComponent } from '../agregar-editar-pago/agregar-editar-pago.component';


@Component({
    selector: 'app-pagos-list',
    templateUrl: './pagos-list.component.html',
})
export class PagosListComponent {

    @Input('pagos')
    public pagos: Pago[] | undefined;

    @Input('importeDebido')
    public importeDebido: number | undefined;

    private ref: DynamicDialogRef | undefined;

    public constructor(
        public importesCalc: ImportesCalcService,
        public dialogService: DialogService,
    ) {}

    public agregarPago(): void {
        this.ref = this.dialogService.open(AgregarEditarPagoComponent, {
            header: 'Agregar pago',
            height: '70%'
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

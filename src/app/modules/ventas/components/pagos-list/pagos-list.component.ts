import { Component, Input } from '@angular/core';
import { Pago } from 'src/app/interfaces/pedido.interface';

@Component({
    selector: 'app-pagos-list',
    templateUrl: './pagos-list.component.html',
})
export class PagosListComponent {

    @Input('pagos')
    public pagos: Pago[] | undefined;

}

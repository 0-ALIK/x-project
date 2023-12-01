import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Pedido } from 'src/app/interfaces/pedido.interface';
import { ImportesCalcService } from '../modules/ventas/services/importes-calc.service';
import { TagModule } from 'primeng/tag';

@Component({
    standalone: true,
    imports: [CommonModule, RouterModule, TagModule],
    providers: [ImportesCalcService],
    selector: 'venta-card',
    template: `
        <article class="w-full p-2 border-round cursor-pointer"
            [ngStyle]="{backgroundColor:'var(--highlight-bg)', color: 'var(--highlight-text-color)'}"
            [routerLink]="['/app/ventas', pedido?.id_pedido]">

            <h2 class="m-0 text-lg mb-1">Pedido #{{ pedido?.id_pedido }}</h2>

            <div class="flex align-items-center justify-content-between">
                <div class="flex align-items-center gap-1">
                    <span>Estado: </span>
                    <p-tag [value]="pedido?.estado?.nombre"></p-tag>
                </div>
                <p class="m-0">{{ pedido?.fecha | date }}</p>
            </div>

        </article>
    `,
})
export class VentaCardComponent {

    @Input('pedido')
    public pedido: Pedido | undefined;
}

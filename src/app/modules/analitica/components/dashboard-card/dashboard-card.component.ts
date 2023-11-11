import { Component, Input, OnInit } from '@angular/core';

/**
 * @author Flavio Sánchez - Alik
 * @version 1.0.0
 */
@Component({
    selector: 'alik-dashboard-card',
    templateUrl: './dashboard-card.component.html',
    host: {
        'class': 'w-full'
    }
})
export class DashboardCardComponent implements OnInit {

    @Input('titulo')
    public titulo: string = 'default';

    @Input('numero')
    public numero: number = 0;

    @Input('icon')
    public icon: string = '';

    @Input('valorAnterior')
    public valorAnterior: number | undefined;

    @Input('tipo')
    public tipo: 'numero' | 'dinero' = 'numero';

    public peligro: boolean = false;

    public porcentaje: number = 0;

    public ngOnInit(): void {
        if(!this.valorAnterior) return;

        const crecimiento = this.numero - this.valorAnterior;
        const porcentaje = (crecimiento / this.valorAnterior) * 100;

        if(porcentaje < 0) {
            this.porcentaje = porcentaje * -1;
            this.peligro = true;
            return;
        }

        this.porcentaje = porcentaje;
    }

}

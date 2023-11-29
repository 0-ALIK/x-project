import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ana-speedometer',
    templateUrl: './indicador-rendimiento.component.html',
    styleUrls: ['./indicador-rendimiento.component.css']
})
export class IndicadorRendimientoComponent implements OnInit {

    @Input('total')
    public total: number | undefined;

    @Input('valorActual')
    public valorActual: number | undefined;

    public porcentaje: number | undefined;

    public ngOnInit(): void {
        if(!this.valorActual || !this.total) return;

        this.porcentaje = (this.valorActual * 100) / this.total;
    }

}

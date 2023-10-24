import { CalendarModule } from 'primeng/calendar';
import { Component, OnInit } from '@angular/core';

interface Formato{
    nameFormato: string,
    codeFormato: string
  }

  interface TiposReportes{
    nameReportes: string,
    codeReportes: string
  }

  interface Pago{
    namePago: string,
    codePago: string
  }
  interface Tipo{
    nameTipo: string,
    codeTipo: string
  }
  interface Pedido{
    nameTiposPedidos: string,
    codePedidos: string
  }


@Component({
  selector: 'ana-reporte-ventas',
  templateUrl: './generar-reportes-ventas.component.html',
  styleUrls: ['./generar-reportes-ventas.component.css']
})
export class GenerarReportesVentasComponent implements OnInit {
    dates: Date[] | undefined;

    public metodosPagos: Pago[] | undefined;
    public selectedMetodosPagos: Pago | undefined;

    public pedidos: Pedido[] | undefined;
    public selectedPedidos: Pedido | undefined;

    public formatos: Formato[] | undefined;
    public selectedFormato: Formato | undefined;

    public tiposReportes: TiposReportes[] | undefined;
    public selectedReportes: TiposReportes | undefined;

    public loading: boolean = false;

    public ngOnInit(): void {
        this.formatos = [
            { nameFormato: '.txt', codeFormato: 'txt' },
            { nameFormato: '.doc', codeFormato: 'doc' },
            { nameFormato: '.docx', codeFormato: 'docx' },
            { nameFormato: '.pdf', codeFormato: 'pdf' },
            { nameFormato: '.xls', codeFormato: 'xls' },
            { nameFormato: 'xlsx', codeFormato: 'xlsx' },
            { nameFormato: '.xlsm', codeFormato: 'xlsm' },
            { nameFormato: '.png', codeFormato: 'png' },
            { nameFormato: '.ods', codeFormato: 'ods' },
            { nameFormato: '.xps', codeFormato: 'xps' }
        ];

        this.tiposReportes = [
            { nameReportes: 'Inventario', codeReportes: 'I' },
            { nameReportes: 'Compras', codeReportes: 'C' },
            { nameReportes: 'Otro', codeReportes: 'O' }
        ];

        this.pedidos = [
            { nameTiposPedidos: 'Suplementos', codePedidos: 'S' },
            { nameTiposPedidos: 'refrescos', codePedidos: 'T' },
            { nameTiposPedidos: 'etc', codePedidos: 'C' },
            { nameTiposPedidos: 'etc', codePedidos: 'P' },
            { nameTiposPedidos: 'etc', codePedidos: 'M' }
        ];

        this.metodosPagos = [
            { namePago: 'Tarjeta', codePago: 'I' },
            { namePago: 'Efectivo', codePago: 'C' },
            { namePago: 'Otro', codePago: 'O' }
        ];
    }



    public load(): void {
        this.loading = true;

        setTimeout(() => {
            this.loading = false
        }, 2000);
    }
}

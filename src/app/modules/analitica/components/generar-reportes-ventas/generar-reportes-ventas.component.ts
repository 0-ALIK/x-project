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
    nameMetodoPago: string,
    codeMetodoPago: string
  }
  interface Pedido{
    nameEstadoPedidos: string,
    codeEstadoPedidos: string
  }
  interface TipoPago{
    nameTipoPago: string,
    codeTipoPago: string
  }

  interface Cliente{
    nameClientes: string,
    codeClientes: string
  }

@Component({
  selector: 'ana-reporte-ventas',
  templateUrl: './generar-reportes-ventas.component.html',
  styleUrls: ['./generar-reportes-ventas.component.css']
})
export class GenerarReportesVentasComponent implements OnInit {
    rangeDates: Date[] | undefined;

    public metodosPagos: Pago[] | undefined;
    public selectedMetodosPagos: Pago | undefined;

    public estadoPedidos: Pedido[] | undefined;
    public selectedEstadoPedidos: Pedido | undefined;

    public formatos: Formato[] | undefined;
    public selectedFormato: Formato | undefined;

    public tiposReportes: TiposReportes[] | undefined;
    public selectedReportes: TiposReportes | undefined;

    public tiposPagos: TipoPago[] | undefined;
    public selectedTiposPagos: TipoPago | undefined;

    public clientes: Cliente[] | undefined;
    public selectedClientes: Cliente | undefined;

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
            { nameReportes: 'Ventas', codeReportes: 'V'},
            { nameReportes: 'Otro', codeReportes: 'O' }
        ];

        this.estadoPedidos = [
            { nameEstadoPedidos: 'Procesado', codeEstadoPedidos: 'S' },
            { nameEstadoPedidos: 'Enviado', codeEstadoPedidos: 'T' },
            { nameEstadoPedidos: 'etEntregadoc', codeEstadoPedidos: 'C' }
        ];

        this.metodosPagos = [
            { nameMetodoPago: 'Tarjeta', codeMetodoPago: 'T' },
            { nameMetodoPago: 'Efectivo', codeMetodoPago: 'E' },
            { nameMetodoPago: 'Otro', codeMetodoPago: 'O' }
        ];

        this.tiposPagos = [
            { nameTipoPago: 'Al contado', codeTipoPago: 'A' },
            { nameTipoPago: 'Credito', codeTipoPago: 'C'}
        ]

        this.clientes = [
            { nameClientes: 'Juancho Perez', codeClientes: '09990'},
            { nameClientes: 'Flavio Sánchez', codeClientes: '4788'},
            { nameClientes: 'Maria del Carmen', codeClientes: '4788'},
            { nameClientes: 'Ameth Cebrían', codeClientes: '4788'},
            { nameClientes: 'José Liao', codeClientes: '4788'},
        ]
    }



    public load(): void {
        this.loading = true;

        setTimeout(() => {
            this.loading = false
        }, 2000);
    }
}

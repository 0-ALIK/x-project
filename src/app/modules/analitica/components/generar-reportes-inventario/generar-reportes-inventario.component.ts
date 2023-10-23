import { Component, OnInit } from '@angular/core';

interface Formato{
    nameFormato: string,
    codeFormato: string
  }

  interface TiposReportes{
    nameTipos: string,
    codeTipos: string
  }

  interface Segmentacion{
    nameSegmento: string,
    codeSegmento: string
  }


@Component({
  selector: 'ana-reporte-inventario',
  templateUrl: './generar-reportes-inventario.component.html',
  styleUrls: ['./generar-reportes-inventario.component.css']
})
export class GenerarReportesInventarioComponent implements OnInit {
    public precio: number = 50;
    public value: string | undefined;

    public value1: number = 20;

    public value2: number = 10.5;

    public value3: number = 25;

    public segmentos: Segmentacion[] | undefined;
    public selectedSegmentos: Segmentacion[] | undefined;

    public formatos: Formato[] | undefined;
    public selectedFormato: Formato | undefined;

    public tiposReportes: TiposReportes[] | undefined;
    public selectedTipos: TiposReportes | undefined;

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
            { nameTipos: 'Inventario', codeTipos: 'I' },
            { nameTipos: 'Compras', codeTipos: 'C' },
            { nameTipos: 'Otro', codeTipos: 'O' }
        ];
        this.segmentos = [
            { nameSegmento: 'Coca Cola', codeSegmento: 'S' },
            { nameSegmento: 'Pepsi', codeSegmento: 'T' },
            { nameSegmento: 'Fanta', codeSegmento: 'C' },
            { nameSegmento: 'etc', codeSegmento: 'P' },
            { nameSegmento: 'etc', codeSegmento: 'M' }
        ];
    }



    public load(): void {
        this.loading = true;

        setTimeout(() => {
            this.loading = false
        }, 2000);
    }
}

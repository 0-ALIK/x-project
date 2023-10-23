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
  selector: 'app-generar-reportes-inventario',
  templateUrl: './generar-reportes-inventario.component.html',
  styleUrls: ['./generar-reportes-inventario.component.css']
})
export class GenerarReportesInventarioComponent implements OnInit {
    precio: number = 50;
    value: string | undefined;

    value1: number = 20;

    value2: number = 10.5;

    value3: number = 25;

    segmentos: Segmentacion[] | undefined;
        selectedSegmentos: Segmentacion[] | undefined;

    formatos: Formato[] | undefined;
        selectedFormato: Formato | undefined;

    tiposReportes: TiposReportes[] | undefined;
        selectedTipos: TiposReportes | undefined;

    ngOnInit() {
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

    loading: boolean = false;

    load() {
        this.loading = true;

        setTimeout(() => {
            this.loading = false
        }, 2000);
    }
}

import { Component, OnInit } from '@angular/core';

interface Formato{
    nameFormato: string,
    codeFormato: string
  }

  interface TiposReportes{
    nameReportes: string,
    codeReportes: string
  }

  interface Marca{
    nameMarca: string,
    codeMarca: string
  }
  interface Tipo{
    nameTipo: string,
    codeTipo: string
  }
  interface Categoria{
    nameCategoria: string,
    codeCategoria: string
  }


@Component({
  selector: 'ana-reporte-inventario',
  templateUrl: './generar-reportes-inventario.component.html',
  styleUrls: ['./generar-reportes-inventario.component.css']
})
export class GenerarReportesInventarioComponent implements OnInit {

    public marcas: Marca[] | undefined;
    public selectedMarcas: Marca | undefined;

    public tipos: Tipo[] | undefined;
    public selectedTipos: Tipo | undefined;

    public categorias: Categoria[] | undefined;
    public selectedCategorias: Categoria | undefined;

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
        this.marcas = [
            { nameMarca: 'Coca Cola', codeMarca: 'S' },
            { nameMarca: 'Pepsi', codeMarca: 'T' },
            { nameMarca: 'Fanta', codeMarca: 'C' },
            { nameMarca: 'etc', codeMarca: 'P' },
            { nameMarca: 'etc', codeMarca: 'M' }
        ];
        this.categorias = [
            { nameCategoria: 'Suplementos', codeCategoria: 'S' },
            { nameCategoria: 'refrescos', codeCategoria: 'T' },
            { nameCategoria: 'etc', codeCategoria: 'C' },
            { nameCategoria: 'etc', codeCategoria: 'P' },
            { nameCategoria: 'etc', codeCategoria: 'M' }
        ];
    }



    public load(): void {
        this.loading = true;

        setTimeout(() => {
            this.loading = false
        }, 2000);
    }
}

import { Component, OnInit } from '@angular/core';
import {AnaliticaService} from '../../../../services/analitica.service'
import * as XLSX from 'xlsx';

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
  interface PuntoReorden{
    namePuntoReorden: string,
    codePuntoReorden: string
  }


@Component({
  selector: 'ana-reporte-inventario',
  templateUrl: './generar-reportes-inventario.component.html',
  styleUrls: ['./generar-reportes-inventario.component.css']
})
export class GenerarReportesInventarioComponent implements OnInit {

    constructor(private analitica: AnaliticaService) { }

    public precio_min: string | undefined;
    public precio_max: string | undefined;

    public nameInforme: string | undefined;
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

    public puntoReorden: PuntoReorden[] | undefined;
    public selectedPuntoReorden: PuntoReorden | undefined;

    public loading: boolean = false;

    public ngOnInit(): void {
        this.formatos = [
            { nameFormato: '.xls', codeFormato: 'xls' },
            { nameFormato: '.xlsx', codeFormato: 'xlsx' },
            { nameFormato: '.xlsm', codeFormato: 'xlsm' },
            { nameFormato: '.csv', codeFormato: 'csv' }
        ];

        this.puntoReorden = [
          {namePuntoReorden: 'Por debajo', codePuntoReorden: 'Por%20debajo'},
          {namePuntoReorden: 'Por encima', codePuntoReorden: 'Por%20encima'},
          {namePuntoReorden: 'En la raya', codePuntoReorden: 'En%20la%20raya'}
      ];


        this.marcas = [
            { nameMarca: 'Coca Cola', codeMarca: 'Coca%20Cola' },
            { nameMarca: 'Pepsi', codeMarca: 'Pepsi' },
            { nameMarca: 'Fanta', codeMarca: 'Fanta' },
        ];
        this.categorias = [
            { nameCategoria: 'Sodas', codeCategoria: 'Sodas' },
            { nameCategoria: 'Suplementos', codeCategoria: 'Suplementos' },
        ];
    }

    public GenerarReporte() {
      this.analitica.getInventario(this.selectedCategorias?.codeCategoria, this.selectedMarcas?.codeMarca, this.precio_max, this.precio_min, this.selectedPuntoReorden?.namePuntoReorden)
      .subscribe(respuesta => {
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(respuesta);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

      if(this.nameInforme == undefined){
        XLSX.writeFile(wb, 'Inventario' + this.selectedFormato?.nameFormato);
      }
      else{
        XLSX.writeFile(wb, this.nameInforme + this.selectedFormato?.nameFormato);
      }
      // Guardar el archivo
    })
    }

    public load(): void {
        this.loading = true;

        setTimeout(() => {
            this.loading = false
        }, 2000);
    }
}

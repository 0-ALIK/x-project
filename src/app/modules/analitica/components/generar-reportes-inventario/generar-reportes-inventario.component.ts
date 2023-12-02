import { Component, OnInit } from '@angular/core';
import {ReclamosService} from '../../services/reclamos.service'
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

    constructor(private analitica: ReclamosService) { }

    public precio_min: string | undefined;
    public precio_max: string | undefined;

    public nameInforme: string | undefined;

    public tipos: Tipo[] | undefined;
    public selectedTipos: Tipo | undefined;

    public formatos: Formato[] | undefined;
    public selectedFormato: Formato | undefined;

    public tiposReportes: TiposReportes[] | undefined;
    public selectedReportes: TiposReportes | undefined;

    public puntoReorden: PuntoReorden[] | undefined;
    public selectedPuntoReorden: PuntoReorden | undefined;

    public categorias: string[] | undefined = [];
    public selectedCategorias: string = '';

    public marcas: string[] | undefined = [];
    public selectedMarcas: string = '';

    public loading: boolean = false;

    public ngOnInit(): void {
      this.analitica.getCategorias().subscribe(
        (datos) => {
          const registros = datos;
          if (registros && Array.isArray(registros)) {
            this.categorias = registros.map((registro) => registro.nombre);
          }
        },
  
        (error) => {
          console.error('Error al obtener datos del backend', error);
        }
      )

      this.analitica.getMarcas().subscribe(
        (datos) => {
          const registros = datos;
          if (registros && Array.isArray(registros)) {
            this.marcas = registros.map((registro) => registro.nombre);
          }
        },
  
        (error) => {
          console.error('Error al obtener datos del backend', error);
        }
      )

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

    }

    public GenerarReporte() {
      this.analitica.getInventario(this.selectedCategorias, this.selectedMarcas, this.precio_max, this.precio_min, this.selectedPuntoReorden?.namePuntoReorden)
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

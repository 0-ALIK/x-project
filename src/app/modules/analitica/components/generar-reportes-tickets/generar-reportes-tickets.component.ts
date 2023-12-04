import { Component } from '@angular/core';
import {ReclamosService} from '../../services/reclamos.service'
import * as XLSX from 'xlsx';
interface Formato{
  nameFormato: string,
  codeFormato: string
}

interface Categoria{
  nameCategoria: string,
  codeCategoria: string
}

interface Estado{
  nameEstado: string,
  codeEstado: string
}

interface Cliente{
  nameCliente: string,
  codeCliente: string
}

interface Prioridad{
  namePrioridad: string,
  codePrioridad: string
}


@Component({
  selector: 'app-generar-reportes-tickets',
  templateUrl: './generar-reportes-tickets.component.html',
  styleUrls: ['./generar-reportes-tickets.component.css']
})
export class GenerarReportesTicketsComponent {

    constructor(private analitica: ReclamosService) { }

    public nameInforme: string | undefined;

    public formatos: Formato[] | undefined;
    public selectedFormato: Formato | undefined;

    public categorias: string[] = []
    public selectedCategoria: string = '';

    public estados: string[] = [];
    public selectedEstado: string = '';

    public prioridades: string[] = [];
    public selectedPrioridad: string = '';

    public clientes: string[] = [];
    public selectedCliente: string = '';

    public loading: boolean = false;

    public ngOnInit(): void {

      this.analitica.getEstadoTickets().subscribe(
        (datos) => {
          const registros = datos;
          if (registros && Array.isArray(registros)) {
            this.estados = registros.map((registro) => registro.estado);
          }
        },
  
        (error) => {
          console.error('Error al obtener datos del backend', error);
        }
      )
        
      this.analitica.getCategoriaTickets().subscribe(
        (datos) => {
          const registros = datos;
          if (registros && Array.isArray(registros)) {
            this.categorias = registros.map((registro) => registro.categoria);
          }
        },
  
        (error) => {
          console.error('Error al obtener datos del backend', error);
        }
      )

      this.analitica.getCliente(undefined,undefined,undefined, undefined).subscribe(
        (datos) => {
          const registros = datos;
          if (registros && Array.isArray(registros)) {
            this.clientes = registros.map((registro) => (registro.Nombre + ' ' + registro.Apellido));
          }
        },
  
        (error) => {
          console.error('Error al obtener datos del backend', error);
        }
      )

      this.analitica.getPrioridadTickets().subscribe(
        (datos) => {
          const registros = datos;
          if (registros && Array.isArray(registros)) {
            this.prioridades = registros.map((registro) => registro.prioridad);
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
        
    }

    public GenerarReporte() {
      this.analitica.getReclamos(this.selectedCategoria, this.selectedCliente, this.selectedEstado, this.selectedPrioridad)
      .subscribe(respuesta => {
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(respuesta);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

      if(this.nameInforme == undefined){
        XLSX.writeFile(wb, 'Reclamos' + this.selectedFormato?.nameFormato);
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



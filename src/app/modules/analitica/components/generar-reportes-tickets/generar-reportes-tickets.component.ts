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

    public categorias: Categoria[] | undefined;
    public selectedCategoria: Categoria | undefined;

    public estados: Estado[] | undefined;
    public selectedEstado: Estado | undefined;

    public prioridades: Prioridad[] | undefined;
    public selectedPrioridad: Prioridad | undefined;

    public clientes: Cliente[] | undefined;
    public selectedCliente: Cliente | undefined;

    public loading: boolean = false;

    public ngOnInit(): void {
        this.formatos = [
            { nameFormato: '.xls', codeFormato: 'xls' },
            { nameFormato: '.xlsx', codeFormato: 'xlsx' },
            { nameFormato: '.xlsm', codeFormato: 'xlsm' },
            { nameFormato: '.csv', codeFormato: 'csv' }
        ];
        
        this.categorias = [
            { nameCategoria: 'Sodas', codeCategoria: 'Sodas' },
            { nameCategoria: 'Suplementos', codeCategoria: 'Suplementos' },
        ];

        this.estados = [
          {nameEstado: 'Ejemplo', codeEstado: 'Ejemplo'}
        ]

        this.prioridades = [
          {namePrioridad: 'Ejemplo', codePrioridad: 'Prioridad'}
        ]

        this.clientes = [
          {nameCliente: 'fulano', codeCliente: 'fulano'}
        ]
    }

    public GenerarReporte() {
      this.analitica.getReclamos(this.selectedCategoria?.nameCategoria, this.selectedCliente?.nameCliente, this.selectedEstado?.nameEstado, this.selectedPrioridad?.namePrioridad)
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



import { CalendarModule } from 'primeng/calendar';
import { Component, OnInit } from '@angular/core';
import {ReclamosService} from '../../services/reclamos.service'
import * as XLSX from 'xlsx';


  interface Formato{
    nameFormato: string,
    codeFormato: string
  }

  interface Genero{
    nameGenero: string,
    codeGenero: string
  }

  interface Pedido{
    nameEstadoPedidos: string,
    codeEstadoPedidos: string
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
  
    constructor(private analitica: ReclamosService) { }



    dates: Date[] | undefined;

    public estadoPedido: string[] = [];
    public selectedEstadoPedido: string = '';

    public formatos: Formato[] | undefined;
    public selectedFormato: Formato | undefined;

    public generos: Genero[] | undefined;
    public selectedGenero: Genero | undefined;

    public clientes: string[] = [];
    public selectedCliente: string = '';

    public productos: string[] = [];
    public selectedProducto: string = '';

    public provincias: string[] = [];
    public selectedProvincia: string = '';

    public nameInforme: string | undefined;

    public loading: boolean = false;

    public ngOnInit(): void {

        this.analitica.getProvincias().subscribe(
          (datos) => {
            const registros = datos;
            if (registros && Array.isArray(registros)) {
              this.provincias = registros.map((registro) => registro.nombre);
            }
          },
    
          (error) => {
            console.error('Error al obtener datos del backend', error);
          }
        )

        this.analitica.getProductos().subscribe(
          (datos) => {
            const registros = datos;
            if (registros && Array.isArray(registros)) {
              this.productos = registros.map((registro) => registro.nombre);
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

        this.analitica.getEstados().subscribe(
          (datos) => {
            const registros = datos;
            if (registros && Array.isArray(registros)) {
              this.estadoPedido = registros.map((registro) => registro.nombre);
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

        this.generos = [
            { nameGenero: 'M', codeGenero: 'M' },
            { nameGenero: 'F', codeGenero: 'G' },
        ];

    }



    
    public GenerarReporte() {
      this.analitica.getPedidos(this.selectedCliente, this.selectedGenero?.codeGenero, this.selectedEstadoPedido, this.selectedProvincia, this.selectedProducto)
      .subscribe(respuesta => {
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(respuesta);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      if(this.nameInforme == undefined){
        XLSX.writeFile(wb, 'Ventas' + this.selectedFormato?.nameFormato);
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


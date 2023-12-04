import { Component } from '@angular/core';
import {ReclamosService} from '../../services/reclamos.service'
import { DashboardService } from '../../services/dashboard.service';
import * as XLSX from 'xlsx';


interface Formato{
  nameFormato: string,
  codeFormato: string
}

interface Producto{
  nameProducto: string,
  codeProducto: string
}

interface Genero{
  nameGenero: string,
  codeGenero: string
}

interface Pedido{
  nameEstadoPedidos: string,
  codeEstadoPedidos: string
}

interface Empresa{
  nameEmpresa: string,
  codeEmpresa: string
}
interface Provincia{
  nameProvincia: string,
  codeProvincia: string
}

@Component({
  selector: 'app-generar-reportes-clientes',
  templateUrl: './generar-reportes-clientes.component.html',
  styleUrls: ['./generar-reportes-clientes.component.css']
})
export class GenerarReportesClientesComponent{
  constructor(private analitica: ReclamosService, private cliente:DashboardService) { }



  dates: Date[] | undefined;

  public estadosCliente: string[] = [];
  public selectedEstadoCliente: string = '';

  public formatos: Formato[] | undefined;
  public selectedFormato: Formato | undefined;

  public generos: Genero[] | undefined;
  public selectedGenero: Genero | undefined;

  public provincias: string[] = [];
  public selectedProvincia: string = '';

  public productos: Producto[] | undefined;
  public selectedProducto: Producto | undefined;

  public nameInforme: string | undefined;
  
  public empresas: string[] | undefined = [];
  public loading: boolean = false;
  public selectedEmpresa: string = '';
  public ngOnInit(): void {

    this.analitica.getEmpresas().subscribe(
      (datos) => {
        const registros = datos.data; // Ajusta según la propiedad real en tu objeto
        if (registros && Array.isArray(registros)) {
          // Mapea los nombres de las empresas
          this.empresas = registros.map((registro) => registro.nombre);
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
          this.estadosCliente = registros.map((registro) => registro.Estado);
        }
      },

      (error) => {
        console.error('Error al obtener datos del backend', error);
      }
    )

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

        this.formatos = [
          { nameFormato: '.xls', codeFormato: 'xls' },
          { nameFormato: '.xlsx', codeFormato: 'xlsx' },
          { nameFormato: '.xlsm', codeFormato: 'xlsm' },
          { nameFormato: '.csv', codeFormato: 'csv' }
      ];

      this.generos = [
          { nameGenero: 'M', codeGenero: 'M' },
          { nameGenero: 'F', codeGenero: 'F' },
      ];

      this.productos = [
        { nameProducto: 'Coca Cola 1 litro', codeProducto: 'Coca%20Cola%201%20litro'},
        { nameProducto: 'Coca Cola 2 Litros', codeProducto: 'Coca%20Cola%202%20Litros'},
        { nameProducto: 'Sodas chicas', codeProducto: 'Sodas%20chicas'},
      ];
  }



  
  public GenerarReporte() {
    this.analitica.getCliente(this.selectedGenero?.codeGenero, this.selectedEstadoCliente, this.selectedEmpresa, this.selectedProvincia)
    .subscribe(respuesta => {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(respuesta);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    if(this.nameInforme == undefined){
      XLSX.writeFile(wb, 'Clientes' + this.selectedFormato?.nameFormato);
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


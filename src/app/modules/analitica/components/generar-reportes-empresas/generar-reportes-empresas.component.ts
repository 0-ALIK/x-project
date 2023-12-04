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
  selector: 'app-generar-reportes-empresas',
  templateUrl: './generar-reportes-empresas.component.html',
  styleUrls: ['./generar-reportes-empresas.component.css']
})
export class GenerarReportesEmpresasComponent {
  constructor(private analitica: ReclamosService, private cliente:DashboardService) { }



  dates: Date[] | undefined;

  public estadosEmpresa: string[] = [];
  public selectedEstadoEmpresa: string = '';

  public formatos: Formato[] | undefined;
  public selectedFormato: Formato | undefined;

  public generos: Genero[] | undefined;
  public selectedGenero: Genero | undefined;

  public provincias: string[] = [];
  public selectedProvincia: string = '';

  
  public nameInforme: string | undefined;
  
  public empresas: string[] | undefined = [];
  public loading: boolean = false;
  public selectedEmpresa: string = '';
  public ngOnInit(): void {

    this.analitica.getAllEmpresas().subscribe(
      (datos) => {
        const registros = datos; // Ajusta según la propiedad real en tu objeto
        console.log(registros)
        if (registros && Array.isArray(registros)) {
          // Mapea los nombres de las empresas
          this.estadosEmpresa = registros.map((registro) => registro.Estado);
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

  }



  
  public GenerarReporte() {
    this.analitica.getCliente(this.selectedGenero?.codeGenero, this.selectedEstadoEmpresa, this.selectedEmpresa, this.selectedProvincia)
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

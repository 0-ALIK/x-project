import { CalendarModule } from 'primeng/calendar';
import { Component, OnInit } from '@angular/core';
import {ReclamosService} from '../../services/reclamos.service'
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

  interface Cliente{
    nameClientes: string,
    codeClientes: string
  }
  interface Provincia{
    nameProvincia: string,
    codeProvincia: string
  }

@Component({
  selector: 'ana-reporte-ventas',
  templateUrl: './generar-reportes-ventas.component.html',
  styleUrls: ['./generar-reportes-ventas.component.css']
})
export class GenerarReportesVentasComponent implements OnInit {
  
    constructor(private analitica: ReclamosService) { }



    dates: Date[] | undefined;

    public estadoPedidos: Pedido[] | undefined;
    public selectedEstadoPedidos: Pedido | undefined;

    public formatos: Formato[] | undefined;
    public selectedFormato: Formato | undefined;

    public generos: Genero[] | undefined;
    public selectedGenero: Genero | undefined;

    public clientes: Cliente[] | undefined;
    public selectedClientes: Cliente | undefined;

    public provincias: Provincia[] | undefined;
    public selectedProvincia: Provincia | undefined;

    public productos: Producto[] | undefined;
    public selectedProducto: Producto | undefined;

    public nameInforme: string | undefined;

    public loading: boolean = false;

    public ngOnInit(): void {

      this.provincias = [
        { nameProvincia: 'Bocas del Toro', codeProvincia: 'Bocas%20del%20Toro' },
        { nameProvincia: 'Coclé', codeProvincia: 'Coclé' },
        { nameProvincia: 'Colón', codeProvincia: 'Colón' },
        { nameProvincia: 'Chiriquí', codeProvincia: 'Chiriquí' },
        { nameProvincia: 'Darién', codeProvincia: 'Darién' },
        { nameProvincia: 'Herrera', codeProvincia: 'Herrera' },
        { nameProvincia: 'Los Santos', codeProvincia: 'Los%20Santos' },
        { nameProvincia: 'Panamá', codeProvincia: 'Panamá' },
        { nameProvincia: 'Veraguas', codeProvincia: 'Veraguas' },
        { nameProvincia: 'Panamá Oeste', codeProvincia: 'Panamá%20Oeste' },
        { nameProvincia: 'Emberá-Wounaan', codeProvincia: 'Emberá-Wounaan' },
        { nameProvincia: 'Guna Yala', codeProvincia: 'Guna%20Yala' },
        { nameProvincia: 'Ngäbe-Buglé', codeProvincia: 'Ngäbe-Buglé' }
      ];

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

        this.estadoPedidos = [
            { nameEstadoPedidos: 'En Progreso', codeEstadoPedidos: 'En%20Progreso' },
            { nameEstadoPedidos: 'Entregado', codeEstadoPedidos: 'Entregado' },
        ];

        this.clientes = [
            { nameClientes: 'Juancho Perez', codeClientes: 'Juancho%20Perez'},
            { nameClientes: 'Flavio Sánchez', codeClientes: 'Flavio%20Sánchez'},
            { nameClientes: 'Maria del Carmen', codeClientes: 'Maria%20del%20Carmen'},
            { nameClientes: 'Ameth Cebrían', codeClientes: 'Ameth%20Cebrían'},
            { nameClientes: 'José Liao', codeClientes: 'José%20Liao'},
        ];

        this.productos = [
          { nameProducto: 'Coca Cola 1 litro', codeProducto: 'Coca%20Cola%201%20litro'},
          { nameProducto: 'Coca Cola 2 Litros', codeProducto: 'Coca%20Cola%202%20Litros'},
          { nameProducto: 'Sodas chicas', codeProducto: 'Sodas%20chicas'},
        ];
    }



    
    public GenerarReporte() {
      this.analitica.getPedidos(this.selectedClientes?.codeClientes, this.selectedGenero?.codeGenero, this.selectedEstadoPedidos?.codeEstadoPedidos, this.selectedProvincia?.codeProvincia, this.selectedProducto?.codeProducto)
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


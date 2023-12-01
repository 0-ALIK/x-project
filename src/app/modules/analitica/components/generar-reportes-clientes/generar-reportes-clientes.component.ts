import { Component } from '@angular/core';
import {AnaliticaService} from '../../../../services/analitica.service'
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
export class GenerarReportesClientesComponent {
  constructor(private analitica: AnaliticaService) { }



  dates: Date[] | undefined;

  public estadoPedidos: Pedido[] | undefined;
  public selectedEstadoPedidos: Pedido | undefined;

  public formatos: Formato[] | undefined;
  public selectedFormato: Formato | undefined;

  public generos: Genero[] | undefined;
  public selectedGenero: Genero | undefined;

  public empresas: Empresa[] | undefined;
  public selectedEmpresa: Empresa | undefined;

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

      this.empresas = [
          { nameEmpresa: 'Coca Cola', codeEmpresa: 'Coca%20Cola'},
          { nameEmpresa: 'Flavio Sánchez', codeEmpresa: 'Flavio%20Sánchez'},
          { nameEmpresa: 'Maria del Carmen', codeEmpresa: 'Maria%20del%20Carmen'},
          { nameEmpresa: 'Ameth Cebrían', codeEmpresa: 'Ameth%20Cebrían'},
          { nameEmpresa: 'José Liao', codeEmpresa: 'José%20Liao'},
      ];

      this.productos = [
        { nameProducto: 'Coca Cola 1 litro', codeProducto: 'Coca%20Cola%201%20litro'},
        { nameProducto: 'Coca Cola 2 Litros', codeProducto: 'Coca%20Cola%202%20Litros'},
        { nameProducto: 'Sodas chicas', codeProducto: 'Sodas%20chicas'},
      ];
  }



  
  public GenerarReporte() {
    this.analitica.getCliente(this.selectedEmpresa?.codeEmpresa, this.selectedGenero?.codeGenero, this.selectedProvincia?.codeProvincia, this.selectedProducto?.codeProducto)
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

import { Component, OnInit} from '@angular/core';

interface Formato{
  nameFormato: string,
  codeFormato: string
}

interface TiposDeReportes{
  nameTipo:string,
  codeTipo:string 
}

interface Provincias{
  nameProvincia: string,
  codeProvincia: string
}

interface Productos{
  nameProducto: string,
  codeProducto: string,
}



@Component({
  selector: 'estefanie-generar-reporte-clientes',
  templateUrl: './generar-reporte-clientes.component.html',
  styleUrls: ['./generar-reporte-clientes.component.css']
})
export class GenerarReporteClientesComponent implements OnInit {
  public provincias: Provincias[] | undefined;
  public selectedProvinciaCliente: Provincias[] | undefined;
  public selectedProvinciaMas: Provincias[] | undefined;
  public selectedProvinciaMenos: Provincias[] | undefined;
  public productos: Productos[] | undefined;
  public selectedProductoCliente: Productos[] | undefined;
  public selectedProductoMas: Productos[] | undefined;
  public selectedProductoMenos: Productos[] | undefined;
  public formatos: Formato[] | undefined;
  public selectedFormato: Formato [] | undefined;
  public tiposReportes: TiposDeReportes [] | undefined;
  public selectedTipo: TiposDeReportes [] | undefined;
  public loading: boolean= false;
  
  public ngOnInit(): void {
    this.formatos = [
      {nameFormato: '.txt', codeFormato: 'txt'},
      {nameFormato: '.cvs', codeFormato: 'cvs'},
      {nameFormato: '.pdf', codeFormato: 'pdf'}
    ]

    this.tiposReportes = [
      {nameTipo: 'Inventario', codeTipo: 'I'},
      {nameTipo: 'Compras', codeTipo: 'C'},
      {nameTipo: 'Otros', codeTipo: 'O'}
    ]

    this.provincias = [
      {nameProvincia: 'Bocas del toro', codeProvincia: '1'},
      {nameProvincia: 'Coclé', codeProvincia: '2'},
      {nameProvincia: 'Colón', codeProvincia: '3'},
      {nameProvincia: 'Chiriquí', codeProvincia: '4'},
      {nameProvincia: 'Darién', codeProvincia: '5'},
      {nameProvincia: 'Herrera', codeProvincia: '6'},
      {nameProvincia: 'Los Santos', codeProvincia: '7'},
      {nameProvincia: 'Panamá', codeProvincia: '8'},
      {nameProvincia: 'Veraguas', codeProvincia: '9'},
      {nameProvincia: 'Panamá Oeste', codeProvincia: '10'},
    ]

    this.productos = [
      {nameProducto: 'Coca Cola', codeProducto: 'S'},
      {nameProducto: 'Pepsi', codeProducto: 'T'},
      {nameProducto: 'Fanta', codeProducto: 'C'},
      {nameProducto: 'Etc', codeProducto: 'M'}
    ]
  }
    public load(): void {
      this.loading = true;

      setTimeout(() => {
        this.loading = false
      }, 2000);
    }

}

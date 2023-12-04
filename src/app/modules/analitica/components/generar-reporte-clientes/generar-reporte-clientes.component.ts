import { Component, OnInit} from '@angular/core';
//Interfaces
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

interface Genero{
  nameGenero: String,
  codeGenero: String
}

@Component({
  selector: 'estefanie-generar-reporte-clientes',
  templateUrl: './generar-reporte-clientes.component.html',
  styleUrls: ['./generar-reporte-clientes.component.css']
})
export class GenerarReporteClientesComponent implements OnInit {
  public generos: Genero[] | undefined;
  public selectedGenero: Genero[] | undefined;
  public nombreCliente: string ="";
  public minEdad: number | undefined;
  public maxEdad: number | undefined;
  public minPedidos: number | undefined;
  public maxPedidos: number | undefined;
  public provincias: Provincias[] | undefined;
  public selectedProvincia: Provincias[] | undefined;
  public productos: Productos[] | undefined;
  public formatos: Formato[] | undefined;
  public selectedFormato: Formato [] | undefined;
  public tiposReportes: TiposDeReportes [] | undefined;
  public selectedTipo: TiposDeReportes [] | undefined;
  public loading: boolean= false;
  
  public ngOnInit(): void {
    this.formatos = [
      {nameFormato: '.txt', codeFormato: 'txt'},
      {nameFormato: '.cvs', codeFormato: 'cvs'},
      {nameFormato: '.doc', codeFormato: 'doc'},
      {nameFormato: '.xls', codeFormato: 'xls'},
      {nameFormato: '.xlsx', codeFormato: 'xlsx'},
      {nameFormato: '.png', codeFormato: 'png'},
      {nameFormato: '.ods', codeFormato: 'ods'},
      {nameFormato: '.xps', codeFormato: 'xps'},
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
      {nameProvincia: 'Panamá Oeste', codeProvincia: '10'}
    ]

     this.generos = [
      {nameGenero: 'masculino', codeGenero: 'M'},
      {nameGenero: 'femenino', codeGenero: 'F'},
      {nameGenero: 'Prefiero no decirlo', codeGenero: 'P'},
      {nameGenero: 'otro', codeGenero: 'O'}
      
     ]
  }
    public load(): void {
      this.loading = true;

      setTimeout(() => {
        this.loading = false
      }, 2000);
    }

}

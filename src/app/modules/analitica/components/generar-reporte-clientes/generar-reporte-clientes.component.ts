import { Component, OnInit} from '@angular/core';

interface Formato{
  nameFormato: string,
  codeFormato: string
}

interface TiposDeReportes{
  nameTipo:string,
  codeTipo:string 
}

interface Segmentacion{
  nameSegmento: string,
  codeSegmento: string
}



@Component({
  selector: 'estefanie-generar-reporte-clientes',
  templateUrl: './generar-reporte-clientes.component.html',
  styleUrls: ['./generar-reporte-clientes.component.css']
})
export class GenerarReporteClientesComponent implements OnInit {
  public segmentos: Segmentacion[] | undefined;
  public segmentos1: Segmentacion[] | undefined;
  public selectedSegmentos: Segmentacion[] | undefined;
  public formatos: Formato[] | undefined;
  public tiposReportes: TiposDeReportes [] | undefined;
  public selectedTipos: TiposDeReportes [] | undefined;
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

    this.segmentos = [
      {nameSegmento: 'Bocas del toro', codeSegmento: '1'},
      {nameSegmento: 'Coclé', codeSegmento: '2'},
      {nameSegmento: 'Colón', codeSegmento: '3'},
      {nameSegmento: 'Chiriquí', codeSegmento: '4'},
      {nameSegmento: 'Darién', codeSegmento: '5'},
      {nameSegmento: 'Herrera', codeSegmento: '6'},
      {nameSegmento: 'Los Santos', codeSegmento: '7'},
      {nameSegmento: 'Panamá', codeSegmento: '8'},
      {nameSegmento: 'Veraguas', codeSegmento: '9'},
      {nameSegmento: 'Panamá Oeste', codeSegmento: '10'}
    
    ]

    this.segmentos1 = [
      {nameSegmento: 'Coca Cola', codeSegmento: 'S'},
      {nameSegmento: 'Pepsi', codeSegmento: 'T'},
      {nameSegmento: 'Fanta', codeSegmento: 'C'},
      {nameSegmento: 'Etc', codeSegmento: 'M'}


    ]
  }

    public load(): void {
      this.loading = true;

      setTimeout(() => {
        this.loading = false
      }, 2000);
    }

}

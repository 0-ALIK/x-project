import { Component } from '@angular/core';
import {SugerenciasService} from 'src/app/services/sugerencias.service' ;

@Component({
  selector: 'app-generar-rating',
  templateUrl: './generar-rating.component.html',
  styleUrls: ['./generar-rating.component.css']
})

export class GenerarRatingComponent {
  sugerenciasData: any[] = [];
  promedioValoracion!: number; 
  promedioRedondeado!: number;
  estadisticasResenas: { stars: number, numReviews: number }[] = [];
  mensajeValoracion: string = '';

  constructor(private sugerenciasService: SugerenciasService) { 
    this.sugerenciasService.getSugerencias().subscribe((data)=> {
        this.sugerenciasData = data;
        this.calcularPromedioValoracion();
        this.contarResenasPorEstrellas();
      });
  }

  calcularPromedioValoracion() {
    if (this.sugerenciasData && this.sugerenciasData.length > 0) {
      const sugerenciasConValoracion = this.sugerenciasData.filter(sugerencia => sugerencia.valoracion !== undefined);
  
      if (sugerenciasConValoracion.length > 0) {
        const sumaValoraciones = sugerenciasConValoracion.reduce((acumulador, sugerencia) => acumulador + sugerencia.valoracion, 0);
        
        this.promedioValoracion = parseFloat((sumaValoraciones / sugerenciasConValoracion.length).toFixed(1));
        this.promedioRedondeado = Math.floor(this.promedioValoracion);
        this.mensajeValoracion = this.obtenerMensajeValoracion(this.promedioRedondeado);
      } else {
        console.warn('No hay sugerencias con valoración');
      }
    } else {
      console.warn('No hay datos de sugerencias');
    }
  }; 

  obtenerMensajeValoracion(promedioRedondeado: number): string {
    switch (promedioRedondeado) {
      case 1:
        return 'Muy malo';
      case 2:
        return 'Malo';
      case 3:
        return 'Regular';
      case 4:
        return 'Bueno';
      case 5:
        return 'Excelente';
      default:
        return '';
    }
  }

  contarResenasPorEstrellas() {
    this.estadisticasResenas = [];  
    this.sugerenciasData.forEach(sugerencia => {
      const valoracion = sugerencia.valoracion;  
      const categoria = this.estadisticasResenas.find(item => item.stars === valoracion);  
      if (categoria) {
        categoria.numReviews++;
      } else {
        this.estadisticasResenas.push({ stars: valoracion, numReviews: 1 });
      }
    });
  }

}

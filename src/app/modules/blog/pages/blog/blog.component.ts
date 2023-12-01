import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario.inteface';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogAgregarOpinionComponent } from '../../components/agregar-opinion/dialog-agregar-opinion.component';
import { MessageService } from 'primeng/api';
import {SugerenciasService} from 'src/app/services/sugerencias.service' ;

@Component({
  selector: 'app-ver-tickets',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class VerBlogComponent{

    public usuario: Usuario[] | undefined;
    private ref: DynamicDialogRef | undefined;
    
    promedioValoracion!: number;
    promedioRedondeado!: number;
    mensajeValoracion: string = '';
    sugerenciasData: any[] = [];
    estadisticasResenas: { stars: number, numReviews: number }[] = [];

  constructor(private sugerenciasService: SugerenciasService,  public dialogService: DialogService,
    public messageService: MessageService) { 
      this.sugerenciasService.getSugerencias().subscribe((data) => {
        this.sugerenciasData = data.sugerencias;
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
    this.estadisticasResenas.sort((a, b) => b.stars - a.stars);
  }
        
  itemsPerPage: number = 15;
  currentPage: number = 1; 

  onPageChange(event: any): void {
    this.currentPage = event.page + 1;
  }
    
    agregarOpinion(): void{
        this.ref = this.dialogService.open(DialogAgregarOpinionComponent, {
            width: '60%',
            height: '75%',
            contentStyle: { overflow: 'auto' },
            baseZIndex: 10000,
            maximizable: true
        });

    }

}

import { Component, OnInit } from '@angular/core';
import {SugerenciasService} from 'src/app/services/sugerencias.service' ;

@Component({
  selector: 'dialog-app-agregar-opinion',
  templateUrl: './dialog-agregar-opinion.component.html',
  styleUrls: ['./dialog-agregar-opinion.component.css']
})
export class DialogAgregarOpinionComponent  {

    loading: boolean = false;
    contenido: string= "";
    value: number | undefined

  constructor(private sugerenciaService: SugerenciasService) {}

  enviarOpinion() {
    const opinionData = {
      cliente_id: 9, 
      contenido: this.contenido,
      valoracion: this.value,
    };

    console.log(opinionData);
  
    this.sugerenciaService.guardarOpinion(opinionData).subscribe((response) => {
        console.log('Opinión enviada con éxito:', response);
        this.contenido = ""; 
        this.value = 0; 
      },(error) => {
        console.error('Error al enviar la opinión:', error);
      }
      );
  }

}
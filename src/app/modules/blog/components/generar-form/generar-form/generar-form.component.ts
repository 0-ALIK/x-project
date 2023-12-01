import { Component, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {SugerenciasService} from '../../../../../services/sugerencias.service' ;

@Component({
  selector: 'app-generar-form',
  templateUrl: './generar-form.component.html',
  styleUrls: ['./generar-form.component.css']
})
export class GenerarFormComponent {
  public sidebarVisible: boolean = false;
  mostrarCalificacion: boolean = false;
  formGroup!: FormGroup;
  ratingText: string = 'Elija una calificación'; // Inicializa el ratingText
  valoracion!: number;
  comentario: string = "";

  constructor(private sugerenciasService: SugerenciasService, private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      comentario: [null, Validators.required],
      valoracion: [null, Validators.required],
    });
  };

  enviarResena() {
    const data = {
      cliente_id: 19, 
      comentario: this.formGroup.get('comentario')?.value,
      valoracion: this.formGroup.get('valoracion')?.value,
    };
  
    this.sugerenciasService.guardarSugerencia(data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  updateRatingText(value: number) {
    switch (value) {
      case 1:
        this.ratingText = 'Muy malo';
        break;
      case 2:
        this.ratingText = 'Malo';
        break;
      case 3:
        this.ratingText = 'Regular';
        break;
      case 4:
        this.ratingText = 'Bueno';
        break;
      case 5:
        this.ratingText = 'Excelente';
        break;
    }
  }
}

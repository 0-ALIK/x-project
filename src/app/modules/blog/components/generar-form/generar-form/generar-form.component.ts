import { Component, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-generar-form',
  templateUrl: './generar-form.component.html',
  styleUrls: ['./generar-form.component.css']
})
export class GenerarFormComponent {
  public sidebarVisible: boolean = false;
  starsToFill = 0; // Variable para controlar cuántas estrellas se llenan

  mostrarCalificacion: boolean = false;
  formGroup!: FormGroup;
  ratingText: string = 'Elija una calificación'; // Inicializa el ratingText

  constructor() {
    this.formGroup = new FormGroup({
      value: new FormControl(0)
    });

    this.formGroup.get('value')?.valueChanges.subscribe((value) => {
      this.updateRatingText(value);
    });
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

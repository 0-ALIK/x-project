import { Component } from '@angular/core';

@Component({
  selector: 'app-generar-rating',
  templateUrl: './generar-rating.component.html',
  styleUrls: ['./generar-rating.component.css']
})
export class GenerarRatingComponent {
  starsToFill = 0; // Variable para controlar cuántas estrellas se llenan

  value!: number;
  promCalificacion: number = 5.0;
  formattedPromCalificacion: string = this.promCalificacion.toFixed(1);

  valoracion: string = 'Excelente'

  // Barra de progreso de reseñas
  rightSections = [
    { stars: '5   ', filledPercentage: 100, numReviews:'  70%' },
    { stars: '4   ', filledPercentage: 10, numReviews: '  45%' },
    { stars: '3   ', filledPercentage: 30, numReviews: '  10%' },
    { stars: '2   ', filledPercentage: 20, numReviews: '  10%' },
    { stars: '1   ', filledPercentage: 40, numReviews: '  3%' },
  ];
}

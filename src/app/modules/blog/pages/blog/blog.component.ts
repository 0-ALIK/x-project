import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup} from '@angular/forms';


@Component({
  selector: 'app-ver-tickets',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class VerBlogComponent {

  public sidebarVisible: boolean = false;
  starsToFill = 0; // Variable para controlar cuántas estrellas se llenan

  mostrarCalificacion: boolean = false;
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

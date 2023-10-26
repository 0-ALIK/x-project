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
  value: number = 0;
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

  review =[
   { name: '5 estrella',
   reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna tincidunt, feugiat nunc quis, vehicula justo. Nunc tristique mi sed nisl congue, ac elementum magna tincidunt. Ut velit enim, efficitur feugiat hendrerit id, maximus at magna. Sed at sapien vel ex feugiat gravida. Pellentesque eu justo felis. Nulla eget tellus sodales, consequat dui et, tincidunt justo. Sed et magna eget est ultrices pharetra et vel ligula.' },
  ];

  products: any[] = [
    {
      imageUrl: 'URL_DE_LA_IMAGEN_1',
      nombre: 'Pepsi Cola',
      fecha: 'hace 3 meses',
      descripcion: 'Descripción del Producto 1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna tincidunt, feugiat nunc quis, vehicula justo. Nunc tristique mi sed nisl congue, ac elementum magna tincidunt. Ut velit enim, efficitur feugiat hendrerit id, maximus at magna. Sed at sapien vel ex feugiat gravida. Pellentesque eu justo felis. Nulla eget tellus sodales, consequat dui et, tincidunt justo. Sed et magna eget est ultrices pharetra et vel ligula.',
      rating: 4,
      date: '2023-10-25',
    },

    {
      imageUrl: 'URL_DE_LA_IMAGEN_1',
      nombre: 'Pepsi Cola',
      fecha: 'hace 3 meses',
      descripcion: 'Descripción del Producto 1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna tincidunt, feugiat nunc quis, vehicula justo. Nunc tristique mi sed nisl congue, ac elementum magna tincidunt. Ut velit enim, efficitur feugiat hendrerit id, maximus at magna. Sed at sapien vel ex feugiat gravida. Pellentesque eu justo felis. Nulla eget tellus sodales, consequat dui et, tincidunt justo. Sed et magna eget est ultrices pharetra et vel ligula.',
      rating: 4,
      date: '2023-10-25',
    },

    {
      imageUrl: 'URL_DE_LA_IMAGEN_1',
      nombre: 'Pepsi Cola',
      fecha: 'hace 3 meses',
      descripcion: 'Descripción del Producto 1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna tincidunt, feugiat nunc quis, vehicula justo. Nunc tristique mi sed nisl congue, ac elementum magna tincidunt. Ut velit enim, efficitur feugiat hendrerit id, maximus at magna. Sed at sapien vel ex feugiat gravida. Pellentesque eu justo felis. Nulla eget tellus sodales, consequat dui et, tincidunt justo. Sed et magna eget est ultrices pharetra et vel ligula.',
      rating: 4,
      date: '2023-10-25',
    },
  ];
}

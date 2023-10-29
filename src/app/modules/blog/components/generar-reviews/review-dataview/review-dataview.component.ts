import { Component } from '@angular/core';

@Component({
  selector: 'app-review-dataview',
  templateUrl: './review-dataview.component.html',
  styleUrls: ['./review-dataview.component.css']
})
export class ReviewDataviewComponent {
  cantReviews: number= 11;

  products: any[] = [
    {
      imageUrl: 'URL_DE_LA_IMAGEN_1',
      nombre: 'Pepsi Cola',
      fecha: 'hace 3 meses',
      descripcion: 'Descripción del Producto usto. Sed et magna eget est ultrices pharetra et vel ligula.',
      rating: 4,
      date: '2023-10-25',
    },

    {
      imageUrl: 'URL_DE_LA_IMAGEN_1',
      nombre: 'Pepsi Cola',
      fecha: 'hace 3 meses',
      descripcion: 'Descripción del Producto Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna tincidunt, feugiat nunc quis, vehicula justo. Nunc tristique mi sed nisl congue, ac elementum magna tincidunt. Ut velit enim, efficitur feugiat hendrerit id, maximus at magna. Sed at sapien vel ex feugiat gravida. Pellentesque eu justo felis. Nulla eget tellus sodales, consequat dui et, tincidunt justo. Sed et magna eget est ultrices pharetra et vel ligula.',
      rating: 4,
      date: '2023-10-25',
    },

    {
      imageUrl: 'URL_DE_LA_IMAGEN_1',
      nombre: 'Pepsi Cola',
      fecha: 'hace 3 meses',
      descripcion: 'Descripción del Producto Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna tincidunt, feugiat nunc quis, vehicula justo. Nunc tristique mi sed nisl congue, ac elementum magna tincidunt. Ut velit enim, efficitur feugiat hendrerit id, maximus at magna. Sed at sapien vel ex feugiat gravida. Pellentesque eu justo felis. Nulla eget tellus sodales, consequat dui et, tincidunt justo. Sed et magna eget est ultrices pharetra et vel ligula.',
      rating: 4,
      date: '2023-10-25',
    },
  ];
}

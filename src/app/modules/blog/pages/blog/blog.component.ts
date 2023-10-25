import { Component } from '@angular/core';

@Component({
  selector: 'app-ver-tickets',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class VerBlogComponent {
  public sidebarVisible: boolean = false;
  starsToFill = 0; // Variable para controlar cuántas estrellas se llenan

  mostrarCalificacion: boolean = false;


  rightSections = [
    { stars: '5 Estrella', filledPercentage: 75, text: '999' },
    { stars: '4 Estrella', filledPercentage: 50, text: '950' },
    { stars: '3 Estrella', filledPercentage: 30, text: '700' },
    { stars: '2 Estrella', filledPercentage: 20, text: '300' },
    { stars: '1 Estrella', filledPercentage: 40, text: '500' },
    // Agrega más objetos para cada sección derecha que desees
  ];
  rightSectionsP =[
    { stars: '5 estrella', filledPercentage: 75, text: '10.050' },
    { stars: '5 estrella', filledPercentage: 75, text: '10.050' },
    { stars: '5 estrella', filledPercentage: 75, text: '10.050' },

  ];


  // Función para iniciar la animación
  startAnimation() {
    let starIndex = 1;
    const animationInterval = setInterval(() => {
      this.starsToFill = starIndex;
      starIndex++;
      if (starIndex > 5) {
        clearInterval(animationInterval);
      }
    }, 500); // Intervalo de 500 ms (ajusta según la velocidad deseada)
  }
}


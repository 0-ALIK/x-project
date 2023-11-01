import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ver-detalle',
  templateUrl: './ver-detalle.component.html',
  styleUrls: ['./ver-detalle.component.css']
})
export class VerDetalleComponent {
    ticketNumber: number = 12391;


    prioridad: string ='ALTA';
    estatus: string = 'REVISIÓN';
    
  
    getPriority(prioridad: string): string {
      switch (prioridad) {
        case 'BAJA':
          return 'success';
        case 'MEDIA':
          return 'warning';
        case 'ALTA':
          return 'danger';
        default:
          return 'unknown';
      }
    }

    getSeverity(estatus: string): string {
      switch (estatus) {
        case 'REVISADO':
          return 'info';
        case 'ESPERA':
          return 'warning';
        case 'RESUELTO':
          return 'success';
        default:
          return 'unknown';
      }
    }
}

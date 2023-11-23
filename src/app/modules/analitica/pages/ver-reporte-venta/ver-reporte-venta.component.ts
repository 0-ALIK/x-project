import { Component } from '@angular/core';

@Component({
  selector: 'app-ver-reporte-venta',
  templateUrl: './ver-reporte-venta.component.html',
  styleUrls: ['./ver-reporte-venta.component.css']
})
export class VerReporteVentaComponent {
  public loading: boolean = false;

  public load(): void {
    this.loading = true;

    setTimeout(() => {
        this.loading = false
    }, 2000);
}
} 

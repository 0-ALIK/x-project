import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  public tablas: string[] | any;

  public dashboard: string[] | any;

  ngOnInit(): void {
    this.rellenarImgTablas();
    this.rellenarImgDashboard();
  }

  private rellenarImgTablas(): void {
    this.tablas = ['tabla-inventario', 'tabla-clientes', 'tabla-tickets', 'tabla-ventas'];
  }

  private rellenarImgDashboard(): void {
    this.dashboard = ['dashboard-1', 'dashboard-2', 'dashboard-3', 'dashboard-4'];
  }
}


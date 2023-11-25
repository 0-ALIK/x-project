import { Component, OnInit } from '@angular/core';
import { provincias } from 'src/app/interfaces/data';
import { Provincia } from 'src/app/interfaces/direccion.interface';


@Component({
  selector: 'app-dashboard-ventas',
  templateUrl: './dashboard-ventas.component.html',
  styleUrls: ['./dashboard-ventas.component.css']
})
export class DashboardVentasComponent implements OnInit {

    public provincias: Provincia[] = provincias;

    public data1: any;

    public options1: any;

    public data2: any;

    public options2: any;

    ngOnInit() {
<<<<<<< HEAD
        this.definirFiltroProvincia();
        this.definirFiltroFecha();
        this.definirFiltroEmpresa();
        // this.definirFiltroTiempo();
        this.definirGraficaLineal1();
        this.definirGraficaLineal2();
=======
        this.definirGraficaLineal();
        this.opcionesLineal();
>>>>>>> main

    }


    definirGraficaLineal1(): void{
        const documentStyle = getComputedStyle(document.documentElement);

        this.data1 = {
            labels: ['Venta1', 'Venta2', 'Venta3', 'Venta4', 'Venta5', 'Venta6', 'Venta7'],
            datasets: [
                {
                    label: 'Ventas',
                    fill:false,
                    backgroundColor: documentStyle.getPropertyValue('--cyan-400'),
                    borderColor: documentStyle.getPropertyValue('--cyan-400'),
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
            ]
        }

        this.options1 = {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

    }

    definirGraficaLineal2(){
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.data2 = {
            labels: ['Venta1', 'Venta2', 'Venta3', 'Venta4', 'Venta5', 'Venta6', 'Venta7'],
            datasets: [
                {
                    label: 'Ventas',
                    fill:false,
                    backgroundColor: documentStyle.getPropertyValue('--pink-400'),
                    borderColor: documentStyle.getPropertyValue('--pink-400'),
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
            ]
        }

        this.options2 = {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

    }


}

import { Component, OnInit } from '@angular/core';

import { Empresa, Tiempo, Fecha, Provincia} from 'src/app/interfaces/ventas.interface';
interface Filtro {
    nombre: string;
    code: string;
}

@Component({
  selector: 'app-dashboard-clientes',
  templateUrl: './dashboard-clientes.component.html',
  styleUrls: ['./dashboard-clientes.component.css']
})
export class DashboardClientesComponent implements OnInit {

    filtroProvincia: Provincia[] | undefined;
    filtroFecha: Fecha[] | undefined;
    filtroEmpresa: Empresa[] | undefined;
    filtroTiempo: Tiempo[] | undefined;

    data1: any;
    options1: any;

    data2: any;
    options2: any;

    data3: any;
    options3: any;

    data4: any;
    options4: any;



    ngOnInit() {
        this.definirFiltroProvincia();
        this.definirFiltroFecha();
        this.definirFiltroEmpresa();
        // this.definirFiltroTiempo();
        this.definirGraficaBarra();
        this.definirGraficaPastel();

    }

    definirFiltroProvincia(): void{
        this.filtroProvincia = [
            { nombre: 'Panamá' },
            { nombre: 'Coclé' },
            { nombre: 'Colón' },
            { nombre: 'Bocas del Toro' }
        ];
    }

    definirFiltroFecha(): void{
        this.filtroFecha = [
            { nombre: 'Filtro1' },
            { nombre: 'Filtro2' },
            { nombre: 'Filtro3' },
            { nombre: 'Filtro4' },
            { nombre: 'Filtro5' }
        ];
    }

    definirFiltroEmpresa(): void{
        this.filtroEmpresa = [
            { nombre: 'Empresa1' },
            { nombre: 'Empresa2' },
            { nombre: 'Empresa3' },
            { nombre: 'Empresa4' },
            { nombre: 'Empresa5' }
        ];
    }

    // definirFiltroTiempo(): void{
    //     this.filtroTiempo = [
    //         { nombre: 'Año', code: "code1"},
    //         { nombre: 'Mes', code: "code2"},
    //         { nombre: 'Filtro3', code: "code3" },
    //         { nombre: 'Filtro4', code: "code4" },
    //         { nombre: 'Filtro5', code: "code5" }
    //     ];
    // }



    definirGraficaBarra(): void{
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        //Barra de arriba
        this.data1 = {
            labels: ['Cliente1', 'Cliente2', 'Cliente3', 'Cliente4', 'Cliente5', 'Cliente6', 'Cliente7'],
            datasets: [
                {
                    label: 'Clientes que más compran',
                    backgroundColor: documentStyle.getPropertyValue('--purple-500'),
                    borderColor: documentStyle.getPropertyValue('--indigo-500'),
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Clientes que menos compran',
                    backgroundColor: documentStyle.getPropertyValue('--cyan-400'),
                    borderColor: documentStyle.getPropertyValue('--blue-400'),
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        }

        this.options1 = {
            indexAxis: 'y',
            maintainAspectRatio: false,
            aspectRatio: 1,
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

        //Barra de abajo
        this.data2 = {
            labels: ['Cliente1', 'Cliente2', 'Cliente3', 'Cliente4', 'Cliente5', 'Cliente6', 'Cliente7'],
            datasets: [
                {
                    label: 'Clientes que más compran',
                    backgroundColor: documentStyle.getPropertyValue('--red-500'),
                    borderColor: documentStyle.getPropertyValue('--orange-500'),
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Clientes que menos compran',
                    backgroundColor: documentStyle.getPropertyValue('--yellow-500'),
                    borderColor: documentStyle.getPropertyValue('--orange-500'),
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        }

        this.options2 = {
            indexAxis: 'y',
            maintainAspectRatio: false,
            aspectRatio: 1,
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

    definirGraficaPastel(): void{
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        //Circulo de arriba
        this.data3 = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [540, 325, 702],
                    backgroundColor: [documentStyle.getPropertyValue('--teal-500'), documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--indigo-500')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--teal-400'), documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--indigo-400')]
                }
            ]
        };

        this.options3 = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        color: textColor
                    }
                }
            }
        };

        //Circulo de abajo
        this.data4 = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [540, 325, 702],
                    backgroundColor: [documentStyle.getPropertyValue('--orange-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--red-500')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--orange-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--red-400')]
                }
            ]
        };

        this.options4 = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        color: textColor
                    }
                }
            }
        };

    }
}

import { Component, OnInit } from '@angular/core';
interface Filtro{
  nombre: string;
  code: string;
}

@Component({
  selector: 'app-dashboard-ventas',
  templateUrl: './dashboard-ventas.component.html',
  styleUrls: ['./dashboard-ventas.component.css']
})
export class DashboardVentasComponent implements OnInit {

  filtroProvincia: Filtro[] | undefined;
    selectedProvincia: Filtro  | undefined;

    filtroFecha: Filtro[] | undefined;
    selectedFecha: Filtro  | undefined;

    filtroEmpresa: Filtro[] | undefined;
    selectedEmpresa: Filtro  | undefined;

    filtroTiempo: Filtro[] | undefined;
    selectedTiempo: Filtro  | undefined;

    data1: any;
    options1: any;

    data2: any;
    options2: any;



    ngOnInit() {
        this.definirFiltroProvincia();
        this.definirFiltroFecha();
        this.definirFiltroEmpresa();
        this.definirFiltroTiempo();
        this.definirGraficaPastel();
        this.definirGraficaBarras();
    }

    definirFiltroProvincia(): void{
        this.filtroProvincia = [
            { nombre: 'Filtro1', code: "code1"},
            { nombre: 'Filtro2', code: "code2"},
            { nombre: 'Filtro3', code: "code3"},
            { nombre: 'Filtro4', code: "code4"},
            { nombre: 'Filtro5', code: "code5"}
        ];
    }

    definirFiltroFecha(): void{
        this.filtroFecha = [
            { nombre: 'Filtro1', code: "code1"},
            { nombre: 'Filtro2', code: "code2"},
            { nombre: 'Filtro3', code: "code3" },
            { nombre: 'Filtro4', code: "code4" },
            { nombre: 'Filtro5', code: "code5" }
        ];
    }

    definirFiltroEmpresa(): void{
        this.filtroEmpresa = [
            { nombre: 'Filtro1', code: "code1"},
            { nombre: 'Filtro2', code: "code2"},
            { nombre: 'Filtro3', code: "code3" },
            { nombre: 'Filtro4', code: "code4" },
            { nombre: 'Filtro5', code: "code5" }
        ];
    }

    definirFiltroTiempo(): void{
        this.filtroTiempo = [
            { nombre: 'Filtro1', code: "code1"},
            { nombre: 'Filtro2', code: "code2"},
            { nombre: 'Filtro3', code: "code3" },
            { nombre: 'Filtro4', code: "code4" },
            { nombre: 'Filtro5', code: "code5" }
        ];
    }


    definirGraficaPastel(): void{
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.data1 = {
            labels: ['Cliente1', 'Cliente2', 'Cliente3', 'Cliente4', 'Cliente5', 'Cliente6', 'Cliente7'],
            datasets: [
                {
                    label: 'My First dataset',
                    fill:false,
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
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

    definirGraficaBarras(): void{
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.data2 = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [540, 325, 702],
                    backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
                }
            ]
        };

        this.options2 = {
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

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard-ventas',
  templateUrl: './dashboard-ventas.component.html',
  styleUrls: ['./dashboard-ventas.component.css']
})
export class DashboardVentasComponent implements OnInit {

    filtroProvincia: Filtro[] | undefined;
    filtroFecha: Filtro[] | undefined;
    filtroEmpresa: Filtro[] | undefined;
    filtroTiempo: Filtro[] | undefined;

    data1: any;
    options1: any;

    data2: any;
    options2: any;



    ngOnInit() {
        this.definirFiltroProvincia();
        this.definirFiltroFecha();
        this.definirFiltroEmpresa();
        // this.definirFiltroTiempo();
        this.definirGraficaLineal();
        this.opcionesLineal();

    }

    definirFiltroProvincia(): void{
        this.filtroProvincia = [
            { nombre: 'Panamá', code: "code1"},
            { nombre: 'Coclé', code: "code2"},
            { nombre: 'Colón', code: "code3"},
            { nombre: 'Bocas del Toro', code: "code4"},
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
            { nombre: 'Empresa1', code: "code1"},
            { nombre: 'Empresa2', code: "code2"},
            { nombre: 'Empresa3', code: "code3" },
            { nombre: 'Empresa4', code: "code4" },
            { nombre: 'Empresa5', code: "code5" }
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


    definirGraficaLineal(): void{

        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.data1 = {
            labels: ['Venta1', 'Venta2', 'Venta3', 'Venta4', 'Venta5', 'Venta6', 'Venta7'],
            datasets: [
                {
                    label: 'Ventas',
                    fill:false,
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
            ]
        }

    }

    opcionesLineal(): void{

        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

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

}

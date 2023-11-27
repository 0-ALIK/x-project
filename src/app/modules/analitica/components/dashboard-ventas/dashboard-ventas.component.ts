import { Component, OnInit } from '@angular/core';
import { Empresa, Tiempo, Fecha, Provincia} from 'src/app/interfaces/clientes.interface';


@Component({
  selector: 'app-dashboard-ventas',
  templateUrl: './dashboard-ventas.component.html',
})
export class DashboardVentasComponent implements OnInit {

    filtroProvincia: Provincia[] | undefined;
    filtroFecha: Fecha[] | undefined;
    filtroEmpresa: Empresa[] | undefined;
    filtroTiempo: Tiempo[] | undefined;

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
            { nombre: 'Panamá'},
            { nombre: 'Coclé'},
            { nombre: 'Colón'},
            { nombre: 'Bocas del Toro'},
        ];
    }

    definirFiltroFecha(): void{
        this.filtroFecha = [
            { nombre: 'Filtro1'},
            { nombre: 'Filtro2'},
            { nombre: 'Filtro3'},
            { nombre: 'Filtro4'},
            { nombre: 'Filtro5'}
        ];
    }

    definirFiltroEmpresa(): void{
        this.filtroEmpresa = [
            { nombre: 'Empresa1'},
            { nombre: 'Empresa2'},
            { nombre: 'Empresa3'},
            { nombre: 'Empresa4'},
            { nombre: 'Empresa5'}
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
                    backgroundColor: documentStyle.getPropertyValue('--green-400'),
                    borderColor: documentStyle.getPropertyValue('--green-400'),
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

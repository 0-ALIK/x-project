import { Empresa } from 'src/app/interfaces/usuario.inteface';
import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Tiempo, Fecha, Provincia } from 'src/app/interfaces/ventas.interface';


@Component({
  selector: 'app-dashboard-clientes',
  templateUrl: './dashboard-clientes.component.html',
  styleUrls: ['./dashboard-clientes.component.css']
})
export class DashboardClientesComponent implements OnInit {

    public empresas: any[] =[];
    public lengthEmpresas: number = 0;

    filtroProvincia: Provincia[] | undefined;
    filtroFecha: Fecha[] | undefined;
    filtroEmpresa: Empresa[] | undefined;
    filtroTiempo: Tiempo[] | undefined;

    data1: any;
    options1: any;

    data2: any;
    options2: any;
    constructor(
        private clienteService: ClientesService
      ) {}

    ngOnInit() {

        this.definirFiltroProvincia();
        this.definirFiltroFecha();
        this.definirFiltroEmpresa();
        // this.definirFiltroTiempo();
        this.definirGraficaPastel();
        this.definirGraficaBarras();

        this.clienteService.getEmpresas().subscribe({
            next: (empresas) => {
                this.empresas = empresas;
                this.lengthEmpresas = empresas.length;
            },
            error: (error) =>{
                console.error("Error al obtener empresas:", error);
                }
        })
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


    definirGraficaPastel(): void{
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.data1 = {
            labels: ['Cliente1', 'Cliente2', 'Cliente3', 'Cliente4', 'Cliente5', 'Cliente6', 'Cliente7'],
            datasets: [
                {
                    label: 'Clientes màs compran',
                    backgroundColor: documentStyle.getPropertyValue('--green-500'),
                    borderColor: documentStyle.getPropertyValue('--yellow-500'),
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Clientes menos compran',
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    borderColor: documentStyle.getPropertyValue('--orange-500'),
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
                    backgroundColor: [documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500'), documentStyle.getPropertyValue('--orange-500')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--yellow-300'), documentStyle.getPropertyValue('--green-300'), documentStyle.getPropertyValue('--orange-300')]
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

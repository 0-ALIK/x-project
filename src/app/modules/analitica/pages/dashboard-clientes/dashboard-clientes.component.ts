
    import { clientes } from './../../../../interfaces/data';
    import { DashboardService } from './../../services/dashboard.service';
    import { Cliente, Usuario } from 'src/app/interfaces/usuario.inteface';
    import { Component, OnInit } from '@angular/core';
    import { Direccion } from 'src/app/interfaces/direccion.interface';
    import {  empresas } from 'src/app/interfaces/data';


    @Component({
      selector: 'app-dashboard-clientes',
      templateUrl: './dashboard-clientes.component.html',
      styleUrls: ['./dashboard-clientes.component.css']
    })
    export class DashboardClientesComponent implements OnInit {

        provincias: Direccion[] | undefined;
        lengthEmpresas: number = 20;
        usuario:Usuario [] | undefined;
        clientes: Cliente[] | undefined;
        nombreCliente: any[] | undefined;
        fecha: any | undefined;

        data1: any;
        options1: any;

        data2: any;
        options2: any;

        data3: any;

        data4: any;

        ngOnInit() {
            this.definirClientes();
            this.cargarDatos();
            this.filtroProvincia();
        }

        constructor(
            private dashboardService: DashboardService) {
          }

        definirClientes(): void {
            this.dashboardService.getClientes().subscribe({
                next: (clientes) => {
                   this.clientes = clientes.data
                   this.filtroNombres();
                   this.graficaClientesMas();
                   this.graficaClientesMenos();
                   this.graficaSegmentacion();
                   this.grafiaProvincias();
                  console.log(this.clientes)
                },
                error: () => {
                }
              })
        }

        filtroProvincia(): void{
            //logica del filtro
        }

        obtenerProvincias(): void {
            this.dashboardService.getProvincias().subscribe({
                next: (provincias) => {
                    console.log('Datos recibidos:', provincias);
                    this.provincias = provincias.data;
                    console.log(this.provincias);
                },
                error: (error) => {
                    console.error(error);

                }
            })
        }

        filtroNombres(): void {
            this.nombreCliente = clientes.map(function(cliente) {
                return cliente.nombre + ' ' + cliente.apellido; // Acceder a la propiedad "nombre" de cada cliente
            });
        }


        private cargarDatos(){
            this.usuario = empresas;
        }

        graficaClientesMas(): void{
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
            const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

            this.data1 = {
                labels: this.nombreCliente,
                datasets: [
                    {
                        label: 'Clientes que más compran',
                        backgroundColor: documentStyle.getPropertyValue('--blue-600'),
                        borderColor: documentStyle.getPropertyValue('--indigo-500'),
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                ]
            };

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

        graficaClientesMenos(): void{
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
            const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

            this.data2 = {
                labels: this.nombreCliente,
                datasets: [
                    {
                        label: 'Clientes que menos compran',
                        backgroundColor: documentStyle.getPropertyValue('--pink-500'),
                        borderColor: documentStyle.getPropertyValue('--pink-400'),
                        data: [65, 59, 80, 81, 56, 55, 40]
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

        graficaSegmentacion(): void{
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
            const surfaceBorder = documentStyle.getPropertyValue('--surface-border');


            this.data3 = {
                labels: ['A', 'B', 'C'],
                datasets: [
                    {
                        data: [540, 325, 702],
                        backgroundColor: [documentStyle.getPropertyValue('--cyan-300'), documentStyle.getPropertyValue('--cyan-600'), documentStyle.getPropertyValue('--cyan-800')],
                        hoverBackgroundColor: [documentStyle.getPropertyValue('--cyan-200'), documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--blue-500')]
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

        grafiaProvincias(): void{
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
            const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

            this.data4 = {
                labels: ['A', 'B', 'C'],
                datasets: [
                    {
                        data: [540, 325, 702],
                        backgroundColor: [documentStyle.getPropertyValue('--pink-300'), documentStyle.getPropertyValue('--pink-600'), documentStyle.getPropertyValue('--pink-800')],
                        hoverBackgroundColor: [documentStyle.getPropertyValue('--pink-200'), documentStyle.getPropertyValue('--pink-400'), documentStyle.getPropertyValue('--pink-500')]
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

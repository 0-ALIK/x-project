import { Direccion } from './../../../../interfaces/direccion.interface';
import { clientes, direcciones, provincias, productos, pedidos } from './../../../../interfaces/data';
import { DashboardService } from './../../services/dashboard.service';
import { Cliente, Usuario } from 'src/app/interfaces/usuario.inteface';
import { Component, OnInit } from '@angular/core';


    @Component({
      selector: 'app-dashboard-clientes',
      templateUrl: './dashboard-clientes.component.html',
      styleUrls: ['./dashboard-clientes.component.css']
    })
    export class DashboardClientesComponent implements OnInit {

        provincia: any[] | undefined;
        provincias: Direccion[] | undefined

        usuario:Usuario [] | undefined;

        clientes: Cliente[] | undefined;
        idCliente: any | undefined;
        nombreCliente: any[] | undefined;
        provinciaCliente: any[] | undefined
        pedidoCliente: any[] | undefined;

        fecha: any | undefined;

        data1: any;
        data2: any;
        data3: any;
        data4: any;

        options1: any;
        options2: any;

        ngOnInit() {
            // this.definirClientes();
            this.definirEmpresaProvincias();
            this.optionsGrafica();
        }

        constructor(private dashboardService: DashboardService) {}

        // definirClientes(): void {
        //     this.dashboardService.getClientes().subscribe({
        //         next: (clientes) => {
        //            this.clientes = clientes.data;
        //            this.filtroNombres();
        //            this.graficaClientesMas();
        //           console.log(this.clientes);
        //         },
        //         error: (error) => {
        //             console.error(error);
        //         }
        //       })
        // }

        definirEmpresaProvincias(): void{
            this.dashboardService.getClientesProvincias().subscribe({
                next:(provincias) => {
                    this.provincias = provincias.data;
                    this.graficaProvincias();
                    this.graficaSegmentacion();
                    this.graficaClientesMas();
                    this.graficaClientesMenos();
                    this.filtroProvincias();
                    this.filtroProvinciaCliente();
                    this.filtroComprasClientes();
                },
                error: (error) => {
                    console.error(error);
                }
            })
        }

        // filtroNombres(): void {
        //     this.nombreCliente = clientes.map(function(cliente) {
        //         return cliente.nombre + ' ' + cliente.apellido; // Acceder a la propiedad "nombre" de cada cliente
        //     });
        // }

        filtroIdCliente(): void {
            this.idCliente = clientes.map(function(id){
                return id.id_cliente;
            });
            console.log(this.idCliente);
        }

        filtroProvincias(): void {
            this.provincia = direcciones.map(function(provincia){
                return provincia.provincia?.nombre;
            });
            console.log(this.provincia);
        }

        filtroProvinciaCliente(): void {
            this.provinciaCliente = clientes.map(function(clienteProvincia){
                return clienteProvincia.direcciones;
            });
            console.log(this.provinciaCliente);
        }

        filtroComprasClientes(): void {
            this.pedidoCliente = pedidos.map(function (pedidoCliente) {
                return pedidoCliente.cliente
            });


        }

        graficaClientesMas(): void{
            const documentStyle = getComputedStyle(document.documentElement);

            this.data1 = {
                labels:  ['luis'],
                datasets: [
                    {
                        label: 'Clientes que más compran',
                        backgroundColor: documentStyle.getPropertyValue('--blue-600'),
                        borderColor: documentStyle.getPropertyValue('--indigo-500'),
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                ]
            };

        }

        graficaClientesMenos(): void{
            const documentStyle = getComputedStyle(document.documentElement);

            this.data2 = {
                labels: ['pepiniloos', 'locos', 'pepinilos'],
                datasets: [
                    {
                        label: 'Clientes que menos compran',
                        backgroundColor: documentStyle.getPropertyValue('--pink-500'),
                        borderColor: documentStyle.getPropertyValue('--pink-400'),
                        data: [65, 59, 80, 81, 56, 55, 40]
                    }
                ]
            }

        }

        graficaSegmentacion(): void{
            const documentStyle = getComputedStyle(document.documentElement);

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
        }

        graficaProvincias(): void{
            const documentStyle = getComputedStyle(document.documentElement);

            this.data4 = {
                labels: this.provincia,
                datasets: [
                    {
                        data: [540, 325, 702],
                        backgroundColor: [documentStyle.getPropertyValue('--pink-300'), documentStyle.getPropertyValue('--pink-600'), documentStyle.getPropertyValue('--pink-800')],
                        hoverBackgroundColor: [documentStyle.getPropertyValue('--pink-200'), documentStyle.getPropertyValue('--pink-400'), documentStyle.getPropertyValue('--pink-500')]
                    }
                ]
            };
        }

        optionsGrafica(): void {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
            const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
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

            this.options1 = {
                indexAxis: 'y',
                maintainAspectRatio: true,
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

import { empresas } from 'src/app/interfaces/data';
import { Pedido } from './../../../../interfaces/pedido.interface';
import { Direccion } from './../../../../interfaces/direccion.interface';
import { clientes, direcciones, provincias, productos, pedidos } from './../../../../interfaces/data';
import { DashboardService } from './../../services/dashboard.service';
import { Cliente, Empresa, Usuario } from 'src/app/interfaces/usuario.inteface';
import { Component, OnInit } from '@angular/core';

    @Component({
      selector: 'app-dashboard-clientes',
      templateUrl: './dashboard-clientes.component.html',
      styleUrls: ['./dashboard-clientes.component.css']
    })
    export class DashboardClientesComponent implements OnInit {

        provincia: any[] | undefined;
        empresaProvincia: any[] | undefined;
        provinciaFrecuente: any[] = [];

        clientes: Cliente[] | undefined;
        clientesCopy: Cliente[] | undefined;
        clientesCompras: any[] | undefined;

        clientesFrecuentes: any[] = [];
        clientesMesActual: any[] | undefined;
        clientesMesAnterior: any[] | undefined;
        provinciaCliente: any[] = [];

        empresas: Empresa[] | undefined;

        date: Date | undefined;

        data1: any;
        data2: any;
        data3: any;
        data4: any;

        options1: any;
        options2: any;

        ngOnInit() {
            this.definirClientes();
            this.definirEmpresas();
            this.definirClientesCompras();
            this.optionsGrafica();
            this.definirProvinciasClientes();
            this.definirProvincias();

            this.clientesCompras = [
                { label: 'Clientes que más compran', value: 'masCompras' },
                { label: 'Clientes que menos compran', value: 'menosCompras' }
             ]
        }

        constructor(private dashboardService: DashboardService) {}

        definirClientes(): void {//carga los clientes para eñ card de totalclientes
             this.dashboardService.getClientes().subscribe({
                 next: (clientes) => {
                    this.clientes = clientes;
                    this.clientesCopy = clientes;
                    const fechaActual = new Date().toISOString().slice(0, 7);
                    this.clientesMesActual = clientes.filter( function(cliente: Cliente) {
                        const fechaCliente = cliente.created_at?.slice(0, 7) ;
                        return fechaCliente === fechaActual;
                    });

                    const fechaActual2 = new Date();
                    fechaActual2.setMonth(fechaActual2.getMonth() - 1); // Restar un mes a la fecha actual
                    const fechaMesAnterior = fechaActual2.toISOString().slice(0, 7);
                    this.clientesMesAnterior = clientes.filter( function(cliente: Cliente) {
                        const fechaCliente = cliente.created_at?.slice(0, 7);
                        return fechaCliente === fechaMesAnterior ;
                    });
                    console.log(this.clientesMesAnterior);
                 },
                 error: (error) => {
                     console.error(error);
                 }
               })
        }

        definirEmpresas(): void {//carga las empresas para el card de total empresas
            this.dashboardService.getEmpresas().subscribe({
                next: (empresa) => {
                   this.empresas = empresa;
                  console.log(empresa);
                },
                error: (error) => {
                    console.error(error);
                }
              })
        }

        definirClientesCompras(): void {//define clientes que mas y menos compran
            this.dashboardService.getPedidos().subscribe({
                next: (pedidos) => {

                    if (pedidos.length === 0) return;

                    const frecuenciaClientes: { [idCliente: string]: number } = {};
                    pedidos.forEach((pedido) => {
                        if(!pedido?.cliente || !pedido?.cliente?.id_cliente) return;

                        const id_cliente = pedido.cliente.id_cliente;
                        frecuenciaClientes[id_cliente] = (frecuenciaClientes[id_cliente] || 0) + 1;
                    });

                    Object.keys(frecuenciaClientes).forEach((id_cliente) => {
                        const pedido = pedidos.find(pedido => pedido?.cliente?.id_cliente === Number(id_cliente));
                        this.clientesFrecuentes.push({
                            frecuencia: frecuenciaClientes[id_cliente],
                            cliente: pedido?.cliente
                        });
                    })
                    this.graficaClientesMas();
                }
            });
        }

        definirProvincias(): void { //provincias que mas compran o que compras hace cada provincia mas o menos
            this.dashboardService.getPedidos().subscribe({
                next: (pedidos) => {
                    if (pedidos.length === 0) return;

                    const frecuenciaProvincia: { [idProvincia: string]: number } = {};
                    pedidos.forEach((pedido) => {
                        if(!pedido?.direccion || !pedido?.direccion?.id_direccion) return;

                        const id_provincia = pedido.direccion.id_direccion;
                        frecuenciaProvincia[id_provincia] = (frecuenciaProvincia[id_provincia] || 0) + 1;
                    });

                    Object.keys(frecuenciaProvincia).forEach((id_provincia) => {
                        const pedido = pedidos.find(pedido => pedido?.direccion?.provincia?.id_provincia === Number(id_provincia));
                        const nombreProvincia = pedido?.direccion?.provincia || 'Sin provincia';

                        this.provinciaFrecuente.push({
                            frecuencia: frecuenciaProvincia[id_provincia],
                            provincia: nombreProvincia
                        });
                    })
                    console.log('el metodo de guardado funciona extraño 322  ' +this.provinciaFrecuente)
                    this.provinciaFrecuente.sort((a, b) => b.frecuencia - a.frecuencia);
                    this.graficaSegmentacion();//muestra las provincias y sus compras
                }
            });
        }

        definirProvinciasClientes(): void { //clientes que mas hay en cada provincia
            this.dashboardService.getPedidos().subscribe({
                next: (pedidos) => {
                    if (pedidos.length === 0) return;

                    const frecuenciaProvinciaCliente: { [idDireccion: string]: number } = {};
                    pedidos.forEach((pedido) => {
                        if(!pedido?.direccion || !pedido?.direccion?.id_direccion) return;

                        const id_direccion = pedido.direccion.id_direccion;
                        frecuenciaProvinciaCliente[id_direccion] = (frecuenciaProvinciaCliente[id_direccion] || 0) + 1;
                    });

                    Object.keys(frecuenciaProvinciaCliente).forEach((id_direccion) => {
                        const pedido = pedidos.find(pedido => pedido?.direccion?.id_direccion === Number(id_direccion));
                        const nombreProvincia = pedido?.cliente || 'Sin cliente';

                        this.provinciaCliente.push({
                            frecuencia: frecuenciaProvinciaCliente[id_direccion],
                            cliente: nombreProvincia
                        });
                    })
                    console.log('el metodo de guardado funciona extraño 322  ' +this.provinciaFrecuente)
                    this.provinciaCliente.sort((a, b) => b.frecuencia - a.frecuencia);

                    this.graficaSegmentacion();//muestra las provincias y sus compras
                }
            });
        }

        public selectedClientes(event: any): void {

            if(!event.value){
                this.clientes = this.clientesCopy;
                return
            }
            if (event.value === 'masCompras') {
                this.clientesFrecuentes.sort((a, b) => b.frecuencia - a.compras);
              } else if (event.value === 'menosCompras') {
                this.clientesFrecuentes.sort((a, b) => a.frecuencia - b.frecuencia);
              }

        }

        graficaClientesMas(): void{
            const documentStyle = getComputedStyle(document.documentElement);

            const frecuencias = this.clientesFrecuentes.map( clienteFrecuente => clienteFrecuente.frecuencia);
            const nombres = this.clientesFrecuentes.map( clienteFrecuente => clienteFrecuente.cliente.nombre);
            console.log('los en la grafica de barras nombres son:' + nombres)

            this.data1 = {
                labels: nombres.slice(0, 3),
                datasets: [
                    {
                        label: 'Clientes que más compran',
                        backgroundColor: documentStyle.getPropertyValue('--blue-600'),
                        borderColor: documentStyle.getPropertyValue('--indigo-500'),
                        data: frecuencias.slice(0,3)
                    },
                ]
            };

        }

        // graficaClientesMenos(): void{
        //     const documentStyle = getComputedStyle(document.documentElement);

        //     const frecuencias = this.clientesFrecuentes.map( clienteFrecuente => clienteFrecuente.frecuencia);
        //     const nombres = this.clientesFrecuentes.map( clienteFrecuente => clienteFrecuente.cliente.nombre);

        //     this.data2 = {
        //         labels: nombres.reverse().slice(0,3),
        //         datasets: [
        //             {
        //                 label: 'Clientes que menos compran',
        //                 backgroundColor: documentStyle.getPropertyValue('--pink-500'),
        //                 borderColor: documentStyle.getPropertyValue('--pink-400'),
        //                 data: frecuencias.reverse().slice(0,3)
        //             }
        //         ]
        //     }

        // }

        graficaSegmentacion(): void{
            const documentStyle = getComputedStyle(document.documentElement);

            const nombres = this.provinciaFrecuente?.map(provinciaFrecuente => provinciaFrecuente.provincia.nombre);
            console.log('los en la grafica nombres son:  '+nombres)
            const frecuencias = this.provinciaFrecuente?.map(provinciaFrecuente => provinciaFrecuente.frecuencia);
            console.log('los en la grafica frecuencias son:  '+frecuencias)

            this.data3 = {
                labels: nombres,
                datasets: [
                    {
                        data: frecuencias,
                        backgroundColor: [documentStyle.getPropertyValue('--cyan-300'), documentStyle.getPropertyValue('--cyan-600'), documentStyle.getPropertyValue('--cyan-800')],
                        hoverBackgroundColor: [documentStyle.getPropertyValue('--cyan-200'), documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--blue-500')]
                    }
                ]
            };
        }

        graficaProvinciasClientes(): void{
            const documentStyle = getComputedStyle(document.documentElement);

            const frecuencias = this.provinciaCliente.map( frecuenciaProvinciaCliente => frecuenciaProvinciaCliente.frecuencia);
            const nombres = this.provinciaCliente.map( frecuenciaProvinciaCliente => frecuenciaProvinciaCliente.cliente.nombre);
            this.data4 = {
                labels: nombres,
                datasets: [
                    {
                        data:frecuencias,
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

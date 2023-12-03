import { empresas, provincias } from 'src/app/interfaces/data';
import { Pedido } from './../../../../interfaces/pedido.interface';
import { Direccion } from './../../../../interfaces/direccion.interface';
import { clientes, direcciones, productos, pedidos } from './../../../../interfaces/data';
import { DashboardService } from './../../services/dashboard.service';
import { Cliente, Empresa } from 'src/app/interfaces/usuario.inteface';
import { Component, OnInit } from '@angular/core';

    @Component({
      selector: 'app-dashboard-clientes',
      templateUrl: './dashboard-clientes.component.html',
      styleUrls: ['./dashboard-clientes.component.css']
    })
    export class DashboardClientesComponent implements OnInit {

        provincias: any[] | undefined;
        empresaProvincia: any[] | undefined;
        provinciaFrecuente: any[] = [];
        provinciaFrecuenteCopy: any[] = [];

        clientes: Cliente[] | undefined;
        clientesCopy: Cliente[] | undefined;
        clientesCompras: any[] | undefined;

        clientesFrecuentes: any[] = [];
        clientesFrecuentesCopy: any[] = [];

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
            this.definirProvinciasCompras();
            this.clientesCompras = [
                { label: 'Más compran', value: 'masCompras' },
                { label: 'Menos compran', value: 'menosCompras' }
             ]

             this.provincias = [
                { label: 'Missouri',value: 'miss' },
                { label: 'Georgia', value: 'geor' },
                { label: 'Michigan', value: 'mich' }
             ]
        }

        constructor(private dashboardService: DashboardService,) {}

        definirClientes(): void {//carga los clientes para el card de totalclientes
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
                    this.clientesFrecuentesCopy = [...this.clientesFrecuentes]
                    this.selectedClientes({})

                    this.graficaClientes();

                }
            });

        }

        definirProvincias(): void {//carga las empresas para el card de total empresas
            this.dashboardService.getProvincias().subscribe({
                next: (provincia) => {
                   this.provincias = provincia;
                  console.log(provincia);
                },
                error: (error) => {
                    console.error(error);
                }
              })
        }

        definirProvinciasCompras(): void { //provincias que mas compran o que compras hace cada provincia mas o menos
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
                    this.provinciaFrecuenteCopy = this.provinciaFrecuente;
                    this.graficaSegmentacion();//muestra las provincias y sus compras
                    this.selectedProvincias({});
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
                        const nombreCliente = pedido?.cliente || 'Sin cliente';

                        this.provinciaCliente.push({
                            frecuencia: frecuenciaProvinciaCliente[id_direccion],
                            cliente: nombreCliente
                        });
                    })
                    this.provinciaCliente.sort((a, b) => b.frecuencia - a.frecuencia);

                    this.graficaProvinciasClientes();//muestra las provincias y sus compras
                }
            });
        }

        public selectedClientes(event: any): void {
            if(!event || !event.value){
                  this.clientesFrecuentes = [...this.clientesFrecuentesCopy];

                return
            }

            if (event.value === 'masCompras') {
                this.clientesFrecuentes.sort((a, b) => b.frecuencia - a.frecuencia);
                return
            } else {
                this.clientesFrecuentes.sort((a, b) => b.frecuencia - a.frecuencia).reverse()
                setTimeout(() => {this.graficaClientes();}, 100);
                return
            }
        }

        public selectedProvincias(event:any): void{

            console.log('Antes de la operación:', this.provinciaFrecuenteCopy);
            this.provinciaFrecuente = this.provinciaFrecuenteCopy
            console.log('sin filtración:', this.provinciaFrecuente);


            if (event.value.length === 0) {
                this.provinciaFrecuente = [...this.provinciaFrecuenteCopy];

              } else {
                this.provinciaFrecuente = this.provinciaFrecuente.filter(item => {
                    const isIncluded = event.value.includes(item.provincia.nombre);
                    console.log(`Item: ${item.provincia.nombre}, isIncluded: ${isIncluded}`);
                    return isIncluded;
                });

                console.log('Después de la filtración: else   ', this.provinciaFrecuente);


            }
              console.log('Después de la filtración:', this.provinciaFrecuente);
            //   this.provinciaFrecuente.sort((a, b) => b.frecuencia - a.frecuencia);

            this.provinciaFrecuente = this.provinciaFrecuenteCopy

            console.log('Después de la copia profunda:', this.provinciaFrecuente);
              this.graficaSegmentacion();
        }

        graficaClientes(): void{
            const documentStyle = getComputedStyle(document.documentElement);
            const frecuencias = this.clientesFrecuentes.map( clienteFrecuente => clienteFrecuente.frecuencia);
            const nombres = this.clientesFrecuentes.map( clienteFrecuente => clienteFrecuente.cliente.nombre);
            this.data1 = {
                labels: nombres.slice(0, 4),
                datasets: [
                    {
                        label: 'Compras',
                        backgroundColor: documentStyle.getPropertyValue('--blue-600'),
                        borderColor: documentStyle.getPropertyValue('--indigo-500'),
                        data: frecuencias.slice(0,4)
                    },
                ]
            };

        }

        graficaSegmentacion(): void{
            const documentStyle = getComputedStyle(document.documentElement);

            const nombres = this.provinciaFrecuente?.map(provinciaFrecuente => provinciaFrecuente.provincia.nombre);
            const frecuencias = this.provinciaFrecuente?.map(provinciaFrecuente => provinciaFrecuente.frecuencia);

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
            const nombre2s = this.provinciaFrecuente?.map(provinciaFrecuente => provinciaFrecuente.provincia.nombre);
            const frecuencia2s = this.provinciaFrecuente?.map(provinciaFrecuente => provinciaFrecuente.frecuencia);
            const documentStyle = getComputedStyle(document.documentElement);

            const frecuencias = this.provinciaCliente.map( provinciaCliente => provinciaCliente.frecuencia);
            const nombres = this.provinciaCliente.map( provinciaCliente => provinciaCliente.cliente.nombre);

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

import { Component, OnInit } from '@angular/core';
import { Direccion } from 'src/app/interfaces/direccion.interface';
import { Usuario } from 'src/app/interfaces/usuario.inteface';
import { DashboardService } from '../../services/dashboard.service';


@Component({
  selector: 'app-dashboard-ventas',
  templateUrl: './dashboard-ventas.component.html',
})
export class DashboardVentasComponent implements OnInit {
    constructor(private dashboardService: DashboardService){}

    direccion: Direccion[] | undefined;
    lengthEmpresas: number = 0;
    diferenciaGanacias: number = 0;
    cantidadPedidos: number = 0;
    fecha: any[] | undefined;
    usuario:Usuario [] | undefined;

    ventas: any;
    ventasOptions: any;

    pagos: any;
    pagosOptions: any;

    mes: any;
    mesOptions: any;

    productos:any;
    productosOptions: any;

    ngOnInit() {
        this.definirFiltroFecha();
        this.graficaMes();
        this.graficaVentas();
        this.graficaProductos();
        this.graficaPagos();
        this.definirTotalVentas();
        this.definirTotalProductos();
    }

    definirFiltroFecha(): void{
        this.fecha = [
            { nombre: 'Filtro1' },
            { nombre: 'Filtro2' },
            { nombre: 'Filtro3' },
            { nombre: 'Filtro4' },
            { nombre: 'Filtro5' }
        ];
    }

    definirTotalVentas(): void {
        this.dashboardService.getPago().subscribe(
            (datos) => {
              const registros = datos; // Ajusta según la propiedad real en tu objeto
              if (registros && Array.isArray(registros)) {
                // Mapea los nombres de las empresas
                const montos: number[] = registros.map((registro: any) => registro.monto);
                this.lengthEmpresas = montos.reduce((total, numero) => total + numero, 0);
                this.diferenciaGanacias = montos.reduce((total, numero) => total + numero, 0);
                console.log(this.lengthEmpresas)
              }
            },

            (error) => {
              console.error('Error al obtener datos del backend', error);
            }
          )
      }

      definirTotalProductos(): void {
        this.dashboardService.getPedidos().subscribe(
            (datos) => {
              const registros = datos; // Ajusta según la propiedad real en tu objeto
              if (registros && Array.isArray(registros)) {
                this.cantidadPedidos = registros.length;
              }
            },
      
            (error) => {
              console.error('Error al obtener datos del backend', error);
            }
          )
      }

    graficaVentas(): void{
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.ventas = {
            labels: ['Venta1', 'Venta2', 'Venta3', 'Venta4', 'Venta5', 'Venta6', 'Venta7'],
            datasets: [
                {
                    label: 'Ventas',
                    fill:false,
                    backgroundColor: documentStyle.getPropertyValue('--pink-300'),
                    borderColor: documentStyle.getPropertyValue('--pink-400'),
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
            ]
        }

        this.ventasOptions = {
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

    graficaPagos():void {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        this.pagos = {
            labels: ['Tarteja', 'Efectivo', 'Cheque'],
            datasets: [
                {
                    label: 'Método de pago',
                    data: [300, 50, 100],
                    backgroundColor: [documentStyle.getPropertyValue('--cyan-300'), documentStyle.getPropertyValue('--cyan-600'), documentStyle.getPropertyValue('--cyan-800')],
                        hoverBackgroundColor: [documentStyle.getPropertyValue('--cyan-100'), documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--blue-500')]
                }
            ]
        };


        this.pagosOptions = {
            cutout: '60%',
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            }
        };
    }

    graficaMes(): void {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.mes = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Ventas mensuales',
                    backgroundColor: documentStyle.getPropertyValue('--cyan-500'),
                    borderColor: documentStyle.getPropertyValue('--pink-400'),
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        };

        this.mesOptions = {
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
    graficaProductos(): void {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.productos = {
            labels: ['Coca-cola', 'Pepsi', 'Vitamina E', 'Colageno', 'Agua'],
            datasets: [
                {
                    label: 'Ventas productos',
                    backgroundColor: documentStyle.getPropertyValue('--cyan-300'),
                    borderColor: documentStyle.getPropertyValue('--pink-400'),
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        };

        this.productosOptions = {
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


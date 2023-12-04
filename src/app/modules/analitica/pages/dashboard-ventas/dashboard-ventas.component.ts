import { Component, OnInit } from '@angular/core';
import { Direccion } from 'src/app/interfaces/direccion.interface';
import { Pedido } from 'src/app/interfaces/pedido.interface';
import { Usuario } from 'src/app/interfaces/usuario.inteface';
import { DashboardService } from '../../services/dashboard.service';


@Component({
  selector: 'app-dashboard-ventas',
  templateUrl: './dashboard-ventas.component.html',
})
export class DashboardVentasComponent implements OnInit {

    direccion: Direccion[] | undefined;
    usuario:Usuario [] | undefined;

    pedidos: Pedido[] | undefined;

    ventas: any;
    ventasOptions: any;

    pagos: any;
    pagosOptions: any;

    mes: any;
    mesOptions: any;

    productos:any;
    productosOptions: any;


    ngOnInit() {
        this.graficaMes();
        this.graficaVentas();
        this.graficaProductos();
        this.graficaPagos();
        this.graficasOptions();
    }

    constructor(private dashboardService: DashboardService) {}



    graficaVentas(): void{
        const documentStyle = getComputedStyle(document.documentElement);

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

    }

    graficaPagos():void {
        const documentStyle = getComputedStyle(document.documentElement);

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
                    backgroundColor:[ documentStyle.getPropertyValue('--pink-300')],
                    borderColor: documentStyle.getPropertyValue('--pink-400'),
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
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
    }

    graficasOptions(): void {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

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
}


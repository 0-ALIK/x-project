import { Component, OnInit } from '@angular/core';
import { categorias, marcas } from 'src/app/interfaces/data';
import { Categoria, Marca } from 'src/app/interfaces/producto.iterface';

@Component({
    selector: 'app-inventario-dashboard',
    templateUrl: './inventario-dashboard.component.html',
})
export class DashboardInventarioComponent implements OnInit {

    public options: any;

    public comprasData: any;

    public stockData: any;

    public marcas: Marca[] | undefined;

    public categorias: Categoria[] | undefined;

    public ngOnInit(): void {
        this.defineOptions();
        this.defineData1();
        this.defineData2();
        this.obtenerMarcasCategoria();
    }

    private obtenerMarcasCategoria(): void {
        setTimeout(() => {
            this.marcas = marcas;
            this.categorias = categorias;
        }, 2000);
    }

    private defineData1(): void {
        this.comprasData = {
            labels: ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4', 'Producto 5'],
            datasets: [
                {
                    label: 'Productos más comprados',
                    data: [540, 325, 702, 620, 442],
                    backgroundColor: ['rgba(76, 208, 125, 0.2)', 'rgba(76, 208, 125, 0.2)', 'rgba(76, 208, 125, 0.2)', 'rgba(76, 208, 125 0.2)', 'rgba(76, 208, 125, 0.2)'],
                    borderColor:['rgb(34, 197, 94)', 'rgb(34, 197, 94)', 'rgb(34, 197, 94)', 'rgb(34, 197, 94)', 'rgb(34, 197, 94)'],
                    borderWidth: 1
                }
            ]
        };
    }

    private defineData2(): void {
        this.stockData = {
            labels: ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4', 'Producto 5'],
            datasets: [
                {
                    label: 'Productos con más stock',
                    data: [540, 325, 702, 620, 220],
                    backgroundColor: ['rgba(76, 208, 125, 0.2)', 'rgba(76, 208, 125, 0.2)', 'rgba(76, 208, 125, 0.2)', 'rgba(76, 208, 125 0.2)', 'rgba(76, 208, 125, 0.2)'],
                    borderColor: ['rgb(34, 197, 94)', 'rgb(34, 197, 94)', 'rgb(34, 197, 94)', 'rgb(34, 197, 94)', 'rgb(34, 197, 94)'],
                    borderWidth: 1
                }
            ]
        };
    }

    private defineOptions(): void {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        this.options = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                x: {
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

import { Component, OnInit } from '@angular/core';
import { categorias, marcas } from 'src/app/interfaces/data';
import { Categoria, Marca, Producto} from 'src/app/interfaces/producto.iterface';
import { DashboardService } from '../../services/dashboard.service';

@Component({
    selector: 'app-inventario-dashboard',
    templateUrl: './inventario-dashboard.component.html',
})
export class DashboardInventarioComponent implements OnInit {

    public productos: Producto[] | undefined;

    public optionsBarras: any;

    public optionsPie: any;

    public stockData: any;

    public segmentacionData: any;

    public marcas: Marca[] | undefined;

    public categorias: Categoria[] | undefined;


    public ngOnInit(): void {
        this.defineOptions();
        this.obtenerMarcasCategoria();
        this.definirProductosMasComprados();

    }

    constructor(
        private dashboardService: DashboardService
    ){}

    

    private obtenerMarcasCategoria(): void {
        setTimeout(() => {
            this.marcas = marcas;
            this.categorias = categorias;
        }, 2000);
    }

    definirProductosMasComprados(): void{
        this.dashboardService.getProductosMasComprados().subscribe({
            next:(productos) => {
                this.graficaProductos;
                this.graficaSegmentacion;
                this.filtroCategoria;
                this.filtroMarca;
            },
            error: (error) => {
                console.error(error);
            }
        })
    }


    filtroCategoria(): void {
        this.categorias = this.productos?.map(function(producto){
            return producto.categoria as Categoria;
        });
        console.log(this.categorias);
    }


    filtroMarca(): void {
        this.marcas = this.productos?.map(function(producto){
            return producto.marca as Marca;
        });
        console.log(this.marcas);
    }

        graficaProductos(): void {
        this.stockData = {
            labels: ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4', 'Producto 5'],
            datasets: [
                {
                    label: 'Productos más comprados',
                    data: [540, 325, 702, 620, 442],
                    backgroundColor: ['rgba(6, 182, 212, 0.2)', 'rgba(6, 182, 212, 0.2)', 'rgba(6, 182, 212, 0.2)', 'rgba(6, 182, 212, 0.2)', 'rgba(6, 182, 212, 0.2)'],
                    borderColor: ['rgb(53, 196, 220)', 'rgb(53, 196, 220)', 'rgb(53, 196, 220)', 'rgb(53, 196, 220)', 'rgb(53, 196, 220)'],
                    borderWidth: 2
                }
            ]
        };
    }

    graficaSegmentacion(): void{
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');


        this.segmentacionData = {
            labels: ['Suplementos', 'Farmacos', 'Bebidas'],
            datasets: [
                {
                    data: [540, 325, 702],
                    backgroundColor: [documentStyle.getPropertyValue('--cyan-300'), documentStyle.getPropertyValue('--cyan-600'), documentStyle.getPropertyValue('--cyan-800')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--cyan-200'), documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--blue-500')]
                }
            ]
        };

    }


    private defineOptions(): void {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        this.optionsBarras = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                y: {
                    maintainAspectRatio: false,
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
        this.optionsPie = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        color: textColor
                    }
                }
            }
        }
    }
}

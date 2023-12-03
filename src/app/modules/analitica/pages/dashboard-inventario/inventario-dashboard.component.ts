import { Component, OnInit } from '@angular/core';
import {ReclamosService} from '../../services/reclamos.service'

@Component({
    selector: 'app-inventario-dashboard',
    templateUrl: './inventario-dashboard.component.html',
})
export class DashboardInventarioComponent implements OnInit {
    constructor(private analitica: ReclamosService){}
    public options: any;

    public comprasData: any;

    public filtroProducto: string[] = [];
    public selectedFiltroProducto: string = 'Categoria';

    public stockData: any;

    public marcas: any[] = [];

    public productosMarca: any[] = [];
    public productosCategoria: any[] = [];

    public categorias: any[] = [];

    public ngOnInit(): void {
        this.filtroProducto = [
            'Categoria',
            'Marca'
        ]

        this.defineOptions();
        this.defineData2();

        this.analitica.getProductos().subscribe(
            (datos) => {
                this.productosMarca = datos.map((data: any) => data.marca_id);
                this.productosCategoria = datos.map((data: any) => data.categoria_id);
            },
            (error) => {
                console.error('Error al obtener datos del backend', error);
            }
        )

        this.analitica.getMarcas().subscribe(
            (datos) => {
                this.marcas = datos;
                this.defineData1();
            },
            (error) => {
              console.error('Error al obtener datos del backend', error);
            }
          )

          this.analitica.getCategorias().subscribe(
            (datos) => {
                this.categorias = datos;
            },
            (error) => {
              console.error('Error al obtener datos del backend', error);
            }
          )
       


    }


    public defineData1(): void {
        var marcasCantidad = [];
        const conteo:any = [];
        if(this.selectedFiltroProducto == "Marca")
        {
            this.productosMarca.forEach(producto => {
                const valor = producto; // Reemplaza 'tuPropiedad' con el nombre real de la propiedad que deseas contar
    
                const indice = conteo.findIndex((item:any) => item.valor === valor);
    
                if (indice !== -1) {
                    // Si el valor ya está en el array, incrementa el contador
                    conteo[indice].contador++;
                } else {
                    // Si es la primera vez que aparece el valor, añade un nuevo objeto al array
                    conteo.push({valor, contador:1});
                }
            });
            conteo.map((data:any) => console.log(data.contador))
    
            const labels = this.marcas.map(producto => producto.nombre);
            
            marcasCantidad = conteo.map((data:any) => data.contador)
            console.log(marcasCantidad)
    
            this.comprasData = {
                labels: labels,
                datasets: [
                    {
                        label: 'Productos más comprados',
                        data: marcasCantidad,
                        backgroundColor: ['rgba(6, 182, 212, 0.2)', 'rgba(6, 182, 212, 0.2)', 'rgba(6, 182, 212, 0.2)', 'rgba(6, 182, 212, 0.2)', 'rgba(6, 182, 212, 0.2)'],
                        borderColor: ['rgb(53, 196, 220)', 'rgb(53, 196, 220)', 'rgb(53, 196, 220)', 'rgb(53, 196, 220)', 'rgb(53, 196, 220)'],
                        borderWidth: 2
                    }
                ]
            };
        }
        if(this.selectedFiltroProducto == "Categoria")
        {
            this.productosCategoria.forEach(producto => {
                const valor = producto; // Reemplaza 'tuPropiedad' con el nombre real de la propiedad que deseas contar
    
                const indice = conteo.findIndex((item:any) => item.valor === valor);
    
                if (indice !== -1) {
                    // Si el valor ya está en el array, incrementa el contador
                    conteo[indice].contador++;
                } else {
                    // Si es la primera vez que aparece el valor, añade un nuevo objeto al array
                    conteo.push({valor, contador:1});
                }
            });
            conteo.map((data:any) => console.log(data.contador))
    
            const labels = this.categorias.map(producto => producto.nombre);
            
            marcasCantidad = conteo.map((data:any) => data.contador)
            console.log(marcasCantidad)
    
            this.comprasData = {
                labels: labels,
                datasets: [
                    {
                        label: 'Productos más comprados',
                        data: marcasCantidad,
                        backgroundColor: ['rgba(6, 182, 212, 0.2)', 'rgba(6, 182, 212, 0.2)', 'rgba(6, 182, 212, 0.2)', 'rgba(6, 182, 212, 0.2)', 'rgba(6, 182, 212, 0.2)'],
                        borderColor: ['rgb(53, 196, 220)', 'rgb(53, 196, 220)', 'rgb(53, 196, 220)', 'rgb(53, 196, 220)', 'rgb(53, 196, 220)'],
                        borderWidth: 2
                    }
                ]
            };
        }
        
    }

    private defineData2(): void {
        this.stockData = {
            labels: ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4', 'Producto 5'],
            datasets: [
                {
                    label: 'Productos con más stock',
                    data: [540, 325, 702, 620, 220],
                    backgroundColor: ['rgba(236, 72, 153, 0.2)', 'rgba(236, 72, 153, 0.2)', 'rgba(236, 72, 153, 0.2)', 'rgba(236, 72, 153, 0.2)', 'rgba(236, 72, 153, 0.2)'],
                    borderColor: ['rgb(240, 107, 172)', 'rgb(240, 107, 172)', 'rgb(240, 107, 172)', 'rgb(240, 107, 172)', 'rgb(240, 107, 172)'],
                    borderWidth: 2
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

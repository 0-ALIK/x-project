import { Component, OnInit } from '@angular/core';
import { categorias, marcas, productos } from 'src/app/interfaces/data';
import { Categoria, Marca, Producto} from 'src/app/interfaces/producto.iterface';
import { DashboardService } from '../../services/dashboard.service';

@Component({
    selector: 'app-inventario-dashboard',
    templateUrl: './inventario-dashboard.component.html',
})
export class DashboardInventarioComponent implements OnInit {

    public productosMasComprados: any[] = [];
    public productos: any;
    public optionsBarras: any;
    public optionsPie: any;
    public stockData: any;
    public segmentacionData: any;
    public marcas: Marca[] | undefined;
    public categorias: Categoria[] | undefined;


    data: any;

    public ngOnInit(): void {
        this.defineOptions();
        this.obtenerMarcasCategoria();
        this.definirProductosMasComprados();
        this.graficaSegmentacion();     
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

    definirProductosMasComprados(): void {
        this.dashboardService.getProductosMasComprados().subscribe({
          next: (productoData: any) => {
            console.log('Respuesta de la API:', productoData);
      
            const productos = productoData.data as Producto[];
      
            if (!productos || productos.length === 0) {
              console.error('No hay productos o la estructura es incorrecta');
              return;
            }
      
            const frecuenciaProductos: { [idProducto: string]: number } = {};
            productos.forEach((producto: any) => {
              if (!producto?.categoria_id || !producto?.marca_id) {
                console.error('Producto sin categoría o marca', producto);
                return;
              }
      
              const key = `${producto.categoria_id}-${producto.marca_id}`;
              frecuenciaProductos[key] = (frecuenciaProductos[key] || 0) + 1;
            });
      
            const productosMasComprados = Object.keys(frecuenciaProductos).map((key) => {
              const [categoriaId, marcaId] = key.split('-');
              return {
                frecuencia: frecuenciaProductos[key],
                producto: { categoria_id: Number(categoriaId), marca_id: Number(marcaId)},
              };
            });
      
            productosMasComprados.sort((a, b) => b.frecuencia - a.frecuencia);
            console.log('Productos más comprados:', productosMasComprados);
            this.graficaProductos();
          },
          error: (error) => {
            console.error('Error al obtener productos más comprados', error);
          }
        });
      }
      

    filtroCategoria(): void {
        /*this.categorias = this.productosMasComprados?.map(function(producto){
            return producto.categoria as Categoria;
        });
        console.log(this.categorias);*/
    }


    filtroMarca(): void {
       /* this.marcas = this.productosMasComprados?.map(function(producto){
            return producto.marca as Marca;
        });
        console.log(this.marcas);*/
    }
    
    graficaProductos(): void {
        const documentStyle = getComputedStyle(document.documentElement);
      
        if (Array.isArray(this.productosMasComprados) && this.productosMasComprados.length > 0) {
          console.log('Datos disponibles:', this.productosMasComprados);
      
          const labels = this.productosMasComprados.map((producto: any) => `${producto.producto.categoria_id} - ${producto.producto.marca_id}`);
          console.log('Etiquetas:', labels);
      
          const data = this.productosMasComprados.map((producto: any) => producto.frecuencia);
          console.log('Datos:', data);
      
          this.data = {
            labels: labels,
            datasets: [
              {
                label: 'Productos más comprados',
                backgroundColor: Array.from({ length: this.productosMasComprados.length }, () => documentStyle.getPropertyValue('--blue-600')),
                borderColor: Array.from({ length: this.productosMasComprados.length }, () => documentStyle.getPropertyValue('--indigo-500')),
                data: data,
                borderWidth: 2,
              },
            ],
          };
        } else {
          console.error('Error: No hay datos para la gráfica');
        }
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

import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Categoria, Marca, Producto } from 'src/app/interfaces/producto.iterface';
import { marcas } from 'src/app/interfaces/data';

@Component({
  selector: 'app-inventario-dashboard',
  templateUrl: './inventario-dashboard.component.html',
})
export class DashboardInventarioComponent implements OnInit {

  public productos: Producto[] | undefined;
  public stockData: any;
  public segmentacionData: any;
  public marcas: Marca[] | undefined;
  public categorias: Categoria[] | undefined;
  public optionsBarras: any;
  public optionsPie: any;

  constructor(private dashboardService: DashboardService) {}

  public ngOnInit(): void {
    this.defineOptions();
    this.obtenerMarcasCategoria();
    this.definirProductosQueMasHay();
    this.definirProductosQueMenosHay();
    this.graficaSegmentacion();     
  }

  private obtenerMarcasCategoria(): void {
    setTimeout(() => {
      this.marcas = marcas;
      this.categorias = this.categorias;
    }, 2000);
  }

  private definirProductosQueMasHay(): void {
    this.dashboardService.getProductos().subscribe({
      next: (productosResponse: any) => {
        console.log('Respuesta de la API:', productosResponse);

        this.productos = productosResponse.data as Producto[];

        if (!this.productos || this.productos.length === 0) {
          console.error('No hay productos o la estructura es incorrecta');
          return;
        }

        const arregloProductos = this.productos.map(producto => ({
          nombre: producto.nombre || '',
          cantidadCajas: producto.cantidad_cajas || 0,
        }));

        arregloProductos.sort((a, b) => (b.cantidadCajas || 0) - (a.cantidadCajas || 0));

        const top3Productos = arregloProductos.slice(0, 3);

        console.log('Productos que más hay:', top3Productos);
        this.graficaProductos(top3Productos);
      },
      error: (error) => {
        console.error('Error al obtener productos que más hay', error);
      }
    });
  }
  private definirProductosQueMenosHay(): void {
    this.dashboardService.getProductos().subscribe({
      next: (productosResponse: any) => {
        console.log('Respuesta de la API:', productosResponse);
  
        this.productos = productosResponse.data as Producto[];
  
        if (!this.productos || this.productos.length === 0) {
          console.error('No hay productos o la estructura es incorrecta');
          return;
        }
  
        const arregloProductos = this.productos.map(producto => ({
          nombre: producto.nombre || '',
          cantidadCajas: producto.cantidad_cajas || 0,
        }));
  
        arregloProductos.sort((a, b) => (a.cantidadCajas || 0) - (b.cantidadCajas || 0));
  
        const bottom3Productos = arregloProductos.slice(0, 3);
  
        console.log('Productos que menos hay:', bottom3Productos);
        this.graficaProductosMenos(bottom3Productos);
      },
      error: (error) => {
        console.error('Error al obtener productos que menos hay', error);
      }
    });
  }

  graficaProductos(top3Productos: any[]): void {
    const documentStyle = getComputedStyle(document.documentElement);

    if (Array.isArray(top3Productos) && top3Productos.length > 0) {
      console.log('Datos disponibles:', top3Productos);

      const labels = top3Productos.map((producto: any) => producto.nombre);
      console.log('Etiquetas:', labels);

      const data = top3Productos.map((producto: any) => producto.cantidadCajas);
      console.log('Datos:', data);

      this.stockData = {
        labels: labels,
        datasets: [
          {
            label: 'Productos más comprados',
            backgroundColor: Array.from({ length: top3Productos.length }, () => documentStyle.getPropertyValue('--blue-600')),
            borderColor: Array.from({ length: top3Productos.length }, () => documentStyle.getPropertyValue('--indigo-500')),
            data: data,
            borderWidth: 2,
          },
        ],
      };
    } else {
      console.error('Error: No hay datos para la gráfica');
    }
  }
  
  graficaProductosMenos(bottom3Productos: any[]): void {
    const documentStyle = getComputedStyle(document.documentElement);
  
    if (Array.isArray(bottom3Productos) && bottom3Productos.length > 0) {
      console.log('Datos disponibles:', bottom3Productos);
  
      const labels = bottom3Productos.map((producto: any) => producto.nombre);
      console.log('Etiquetas:', labels);
  
      const data = bottom3Productos.map((producto: any) => producto.cantidadCajas);
      console.log('Datos:', data);
  
      this.stockData = {
        labels: labels,
        datasets: [
          {
            label: 'Productos menos comprados',
            backgroundColor: Array.from({ length: bottom3Productos.length }, () => documentStyle.getPropertyValue('--red-600')),
            borderColor: Array.from({ length: bottom3Productos.length }, () => documentStyle.getPropertyValue('--orange-500')),
            data: data,
            borderWidth: 2,
          },
        ],
      };
    } else {
      console.error('Error: No hay datos para la gráfica');
    }
  }

  graficaSegmentacion(): void {
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

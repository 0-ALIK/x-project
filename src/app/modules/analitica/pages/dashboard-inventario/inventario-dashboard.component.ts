import { Component, OnInit } from '@angular/core';
import {ReclamosService} from '../../services/reclamos.service'
import { DashboardService } from '../../services/dashboard.service';
import { Categoria, Marca, Producto } from 'src/app/interfaces/producto.iterface';
import { marcas } from 'src/app/interfaces/data';

@Component({
  selector: 'app-inventario-dashboard',
  templateUrl: './inventario-dashboard.component.html',
})
export class DashboardInventarioComponent implements OnInit {
    constructor(private analitica: ReclamosService,
                private dashboardService: DashboardService){}
                
    public productos: Producto[] | undefined;
    public options: any;

    public comprasData: any;

    public filtroProducto: string[] = [];
    public selectedFiltroProducto: string = 'Categoria';

    public filtroProducto2: string[] = [];
    public selectedFiltroProducto2: string = '+ Stock';


    public stockData: any;

    public marcas: any[] = [];

    public productosMarca: any[] = [];
    public productosCategoria: any[] = [];

    public categorias: any[] = [];

    public optionsBarras: any;
    public optionsPie: any;
    public CantidadTotalProductos: number = 0;
    public CantidadTotalMarcas: number = 0;
    public CantidadTotalCategorias: number = 0;
    public ValorTotalInventario: number = 0;
    public ValorAnteriorInventario: number = 2150;

    public ngOnInit(): void {
        this.filtroProducto = [
            'Categoria',
            'Marca'
        ]
        this.filtroProducto2 = [
          '+ Stock',
          '- Stock'
      ]

        this.defineOptions();
        this.obtenerMarcasCategoria();
        this.definirProductosQueMasHay();  
        this.definirTotalProductos();
        this.definirTotalCategorias();
        this.definirTotalMarcas(); 
        this.definirTotalInventario();

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

            },
            (error) => {
              console.error('Error al obtener datos del backend', error);
            }
          )

          this.analitica.getCategorias().subscribe(
            (datos) => {
                this.categorias = datos;
                this.defineData1();
            },
            (error) => {
              console.error('Error al obtener datos del backend', error);
            }
          )
       


    }


    public defineData1(): void {
        var marcasCantidad = [];
        const conteo:any = [];
        
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
            if(this.selectedFiltroProducto == "Marca")
          {
            const labels = this.marcas.map(producto => producto.nombre);
            
            marcasCantidad = conteo.map((data:any) => data.contador)
            console.log(marcasCantidad)
    
            this.comprasData = {
                labels: labels,
                datasets: [
                    {
                        label: 'Cantidad: ',
                        data: marcasCantidad,
                        backgroundColor: ['rgba(6, 182, 212, 0.2)'],
                        borderColor: ['rgb(53, 196, 220)'],
                        borderWidth: 2
                    }
                ]
            };
          }
        if(this.selectedFiltroProducto == "Categoria")
        {
            const labels = this.categorias.map(producto => producto.nombre);
            
            marcasCantidad = conteo.map((data:any) => data.contador)
            console.log(marcasCantidad)
    
            this.comprasData = {
                labels: labels,
                datasets: [
                    {
                        label: 'Cantidad: ',
                        data: marcasCantidad,
                        backgroundColor: ['rgba(6, 182, 212, 0.2)'],
                        borderColor: ['rgb(53, 196, 220)'],
                        borderWidth: 2
                    }
                ]
            };
        }
      }
        private obtenerMarcasCategoria(): void {
          setTimeout(() => {
            this.marcas = marcas;
            this.categorias = this.categorias;
          }, 2000);
        }
      
        public definirProductosQueMasHay(): void {
          this.dashboardService.getProductos().subscribe({
            next: (productosResponse: any) => {
              console.log('Respuesta de la API:', productosResponse);
      
              this.productos = productosResponse.data as Producto[];
      
              if (!this.productos || this.productos.length === 0) {
                console.error('No hay productos o la estructura es incorrecta');
                return;
              }
              if(this.selectedFiltroProducto2 == '+ Stock'){
                const arregloProductos = this.productos.map(producto => ({
                  nombre: producto.nombre || '',
                  cantidadCajas: producto.cantidad_cajas || 0,
                }));
        
                arregloProductos.sort((a, b) => (b.cantidadCajas || 0) - (a.cantidadCajas || 0));
        
                const top3Productos = arregloProductos.slice(0, 5);
        
                console.log('Productos que más hay:', top3Productos);
                this.graficaProductos(top3Productos);
              }
              if(this.selectedFiltroProducto2 == '- Stock')
              {
                const arregloProductos = this.productos.map(producto => ({
                  nombre: producto.nombre || '',
                  cantidadCajas: producto.cantidad_cajas || 0,
                }));
        
                arregloProductos.sort((a, b) => (a.cantidadCajas || 0) - (b.cantidadCajas || 0));
        
                const top3Productos = arregloProductos.slice(0, 5);
        
                console.log('Productos que más hay:', top3Productos);
                this.graficaProductos(top3Productos);
              }
            },
            error: (error) => {
              console.error('Error al obtener productos que más hay', error);
            }
          });
        }
      
        definirTotalProductos(): void {
          this.dashboardService.getProductos().subscribe({
            next: (productosResponse: any) => {
              console.log('Respuesta de la API (productos):', productosResponse);
      
              this.productos = productosResponse.data as  Producto[] || [];
      
              this.CantidadTotalProductos = this.productos.length;
              
            },
            error: (error) => {
              console.error('Error al obtener productos', error);
            }
          });
        }
      
      
        definirTotalCategorias(): void {
          this.dashboardService.getCategoria().subscribe({
            next: (categoriasResponse: any) => {
              console.log('Respuesta de la API (categorias):', categoriasResponse);
      
              this.categorias = categoriasResponse.data as  Categoria[] || [];
      
              this.CantidadTotalCategorias = this.categorias.length;
              
            },
            error: (error) => {
              console.error('Error al obtener categorias', error);
            }
          });
        }
      
        definirTotalMarcas(): void {
          this.dashboardService.getMarca().subscribe({
            next: (marcasResponse: any) => {
              console.log('Respuesta de la API (marcas):', marcasResponse);
              this.marcas = marcasResponse.data as  Marca[] || [];
      
              this.CantidadTotalMarcas = this.marcas.length;
              
            },
            error: (error) => {
              console.error('Error al obtener marcas', error);
            }
          });
        }
      
        calcularValorTotalInventario(): number {
          return (this.productos || []).reduce((total, producto) => {
            const cantidadProductosEnCaja = producto.cantidad_por_caja || 0;
            const cantidadCajas = producto.cantidad_cajas || 0;
            const precioUnitario = producto.precio_unit || 0;   
            const valorProducto = cantidadProductosEnCaja * cantidadCajas * precioUnitario;
            
            return total + valorProducto;
          }, 0);
        }
      
        definirTotalInventario(): void {
          this.dashboardService.getProductos().subscribe({
            next: (productosResponse: any) => {
              console.log('Respuesta de la API (productos):', productosResponse);
              const productosAnteriores = this.productos || [];
              this.productos = productosResponse.data as Producto[] || [];
              this.CantidadTotalProductos = this.productos.length;
              const valorAnterior = this.calcularValorTotalInventario();
              this.ValorAnteriorInventario = valorAnterior;
              this.ValorTotalInventario = this.calcularValorTotalInventario();
            },
            error: (error) => {
              console.error('Error al obtener productos', error);
            }
          });
        }
        
        graficaProductos(top3Productos: any[]): void {
          const documentStyle = getComputedStyle(document.documentElement);
      
          if (Array.isArray(top3Productos) && top3Productos.length > 0) {
            console.log('Datos disponibles:', top3Productos);
      
            const labels = top3Productos.map((producto) => producto.nombre);
            console.log('Etiquetas:', labels);
      
            const data = top3Productos.map((producto: any) => producto.cantidadCajas);
            console.log('Datos:', data);
      
            this.stockData = {
              labels: labels,
              datasets: [
                {
                  label: 'Productos',
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

  

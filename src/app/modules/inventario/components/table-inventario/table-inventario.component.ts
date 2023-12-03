import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api'
import { Categoria, Marca, Producto } from 'src/app/interfaces/producto.iterface';
import { Router } from '@angular/router';
import { GenerarReportesInventarioComponent } from 'src/app/modules/analitica/components/generar-reportes-inventario/generar-reportes-inventario.component';
import { InventarioService } from 'src/app/services/inventario.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
    selector: 'app-table-inventario',
    templateUrl: './table-inventario.component.html',
    styleUrls: ['./table-inventario.component.css']
})

export class TableInventarioComponent implements OnInit {

    public ref: DynamicDialogRef | undefined;

    public selectedProducto: Producto | undefined;

    public categorias: Categoria[] | undefined;

    public marcas: Marca[] | undefined;

    public productos: Producto[] | undefined;

    public constructor(
        private confirmationService: ConfirmationService,
        private messageService: MessageService,
        public dialogService: DialogService,
        private router: Router,
        private inventarioService: InventarioService,
        private productoService: ProductoService
    ) { }

    public ngOnInit(): void {
        this.inventarioService.getInventario().subscribe(
            (data: Producto[]) => {
                this.productos = data;
                console.log(this.productos)
            },
            (error) => {
                console.log('Error al obtener los datos del inventario', error);
            }
        );
    }

    public onEliminarProducto( producto: Producto ): void {
        this.confirmationService.confirm({
            message: `¿Quieres eliminar el registro de ${producto.nombre}?`,
            header: 'Confirmar Eliminación',
            icon: 'pi pi-info-circle',
            accept: this.eliminarProducto,
            reject: (type: ConfirmEventType) => {
                switch (type) {
                    case ConfirmEventType.REJECT:
                        this.messageService.add({ severity: 'error', summary: 'Operación Fallida', detail: 'Registro no eliminado' });
                        break;
                    case ConfirmEventType.CANCEL:
                        this.messageService.add({ severity: 'warn', summary: 'Operación Cancelada', detail: 'Cancelado' });
                        break;
                }
            },
            key: 'confirmDialog'
        });
    }

    public showGenerarReporte(): void {
        this.ref = this.dialogService.open(GenerarReportesInventarioComponent, {
            header: 'Generar Reporte',
            height: '70%'
        });
    }

    public aplicaReordenValue( producto: Producto, values: string[] ): string {
        if(!producto?.cantidad_cajas || !producto?.punto_reorden) {
            throw new Error('Campos necesarios no presentes en objeto');
        }

        if(producto.cantidad_cajas <= producto.punto_reorden) {
            return values[0];
        }

        return values[1];
    }

    public onRowSelect( event: any ): void {
        this.router.navigate([
            '/app/inventario/editar-producto/',
            this.selectedProducto?.id_producto
        ]);
    }

    eliminarProducto(producto: Producto): void {
        if (producto && producto.id_producto) {
            this.productoService.deleteProducto(producto.id_producto).subscribe(
                () => {
                    this.productos = this.productos?.filter(p => p.id_producto !== producto.id_producto)
                    this.messageService.add({ severity: 'success', summary: 'Operación Exitosa', detail: 'Producto eliminado' });
                },
                (error) => {
                    console.error('Error al eliminar el producto:', error);
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el producto' });
                }
            );
        }
    }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pedido, PedidoEstado } from 'src/app/interfaces/pedido.interface';
import { Cliente, Empresa } from 'src/app/interfaces/usuario.inteface';
import { ImportesCalcService } from '../../services/importes-calc.service';
import { Producto } from 'src/app/interfaces/producto.iterface';
import { Reclamo } from 'src/app/interfaces/raclamo.interface';
import { VentasService } from 'src/app/services/ventas.service';
import { MessageService } from 'primeng/api';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AgregarReclamoComponent } from '../../components/agregar-reclamo.component';
import { ReclamosService } from 'src/app/modules/tickets/services/tickets.service';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;


@Component({
    selector: 'app-ver-pedido-by-id',
    template: `
        <p-toast></p-toast>
        <div class="flex align-items-center gap-2">
            <h1 class="text-3xl">Pedido con id: id</h1>
            <p-tag [value]="pedido?.estado?.nombre"></p-tag>
        </div>

        <div class="flex flex-column md:flex-row gap-2">
            <div class="w-full">
                <div class="mb-2">
                    <alik-card-user [cliente]="cliente"></alik-card-user>
                </div>
                <ng-container *ngIf="tieneEmpresa">
                    <div class="mb-2">
                        <h2 class="text-lg m-0 p-0">Empresa asociada</h2>
                        <alik-card-empresa [empresa]="empresa"></alik-card-empresa>
                    </div>
                </ng-container>
                <div class="mb-2">
                    <h2 class="text-lg m-0 p-0">Dirección de envio</h2>
                    <alik-card-direccion [direccion]="pedido?.direccion"></alik-card-direccion>
                </div>
                <div class="mb-2" *ngIf="esAdmin">
                    <h2 class="text-lg m-0 p-0">Estado del pedido</h2>
                    <div class="flex gap-2 align-items-center">
                        <p-dropdown
                            [options]="estados"
                            [(ngModel)]="estado"
                            placeholder="Selecciona estado"
                            optionLabel="nombre">
                        </p-dropdown>
                        <p-button
                            [loading]="loading"
                            label="Cambiar estado"
                            [disabled]="estado === undefined"
                            (onClick)="cambiarEstado()">
                        </p-button>
                    </div>
                </div>
                <div class="mb-2" *ngIf="reclamo">
                    <h2 class="text-lg m-0 p-0">Reclamo</h2>
                    <ticket-card [reclamo]="reclamo"></ticket-card>
                </div>
                <div class="mb-2">
                    <h2 class="text-lg m-0 p-0">Importe de la venta</h2>
                    <p-inputNumber
                        [(ngModel)]="importe"
                        [readonly]="true"
                        inputId="currency-us"
                        mode="currency"
                        currency="USD"
                        locale="en-US">
                    </p-inputNumber>
                </div>
                <div>
                    <p-button
                        label="Generar factura"
                        (onClick)="generarFactura()">
                    </p-button>
                    <p-button
                        label="Crear reclamo"
                        [disabled]="reclamo !== undefined"
                        (onClick)="crearReclamo()">
                    </p-button>
                </div>
            </div>

            <div class="w-full">
                <p-accordion [activeIndex]="0">
                    <p-accordionTab header="Productos">
                        <app-productos-pedidos [pedidoProducto]="pedido?.pedido_productos || []" [pagos]="pedido?.pago" ></app-productos-pedidos>
                    </p-accordionTab>

                    <p-accordionTab header="Pagos">
                        <app-pagos-list
                            [importe]="importe"
                            [pedidoid]="pedido?.id_pedido || 0"
                            [importePagado]="importePagado"
                            [pagos]="pedido?.pago">
                        </app-pagos-list>
                    </p-accordionTab>
                </p-accordion>
            </div>

        </div>
    `
})
export class VerPedidoByIdComponent implements OnInit {

    private ref: DynamicDialogRef | undefined;

    public cliente: Cliente | undefined;

    public producto: Producto | undefined;

    public pedido: Pedido | undefined;

    public empresa: Empresa | undefined;

    public tieneEmpresa: boolean = false;

    public importe: number | undefined;

    public loading = false;

    public esAdmin: boolean = false;

    public estados: PedidoEstado[] = [];
    public estado: PedidoEstado | undefined;

    public importePagado: number | undefined;

    public reclamo: Reclamo | undefined;

    public constructor(
        private activatedRoute: ActivatedRoute,
        public importesCalc: ImportesCalcService,
        private ventaService: VentasService,
        public dialogService: DialogService,
        private message: MessageService,
        private reclamoService: ReclamosService
    ) {}

    public ngOnInit(): void {
        if(!localStorage.getItem('usuario')) {
            const usuario = JSON.parse(localStorage.getItem('usuario') || '');
            if(usuario.tipo === 'admin') {
                this.esAdmin = true;
            }
        }

        this.activatedRoute.params.subscribe({
            next: ({id}) => {
                this.obtenerPedido(Number(id));
            }
        });

        this.ventaService.getPedidoEstados().subscribe({
            next: estados => {
                this.estados = estados;
            }
        });

        this.reclamoService.getReclamos().subscribe({
            next: resp => {
                this.reclamo = resp.data.find((r: Reclamo) => r.id_reclamo === this.pedido?.id_pedido);
                console.log(this.reclamo);
            },
            error: error => {
                console.log(error);
            }
        });
    }

    private obtenerPedido(id: number): void {
        this.ventaService.getAllPedidos().subscribe({
            next: pedidos => {
                this.pedido = pedidos.find(p => p.id_pedido = id);

                if(!this.pedido) {
                    console.log('NO SE ENCONTRO XD');
                    return;
                }

                this.importe = this.importesCalc.calcularImporte(this.pedido.pedido_productos || []);
                this.importePagado = this.importesCalc.calcularImportePagado(this.pedido.pago || []);

                this.cliente = this.pedido.cliente;

                if(this.pedido.cliente?.empresa) {
                    this.empresa = this.pedido.cliente?.empresa
                    this.tieneEmpresa = true;
                }
                console.log(this.pedido);
            }
        });
    }

    public crearReclamo(): void {
        this.ref = this.dialogService.open(AgregarReclamoComponent, {
            header: 'Agregar pago',
            data: {
                cliente_id: this.pedido?.cliente?.id_cliente,
                pedido_id: this.pedido?.id_pedido
            },
            height: '70%'
        });

        this.ref.onClose.subscribe((mensaje) => {
            if(mensaje) {
                this.message.add({severity: 'error', summary: 'Reclamo agregado'});
                return;
            }
            this.message.add({severity: 'success', summary: 'El reclamo no se pudo agregar'});
        });
    }

    public cambiarEstado(): void {
        if(!this.estado?.id_pedido_estado || !this.pedido?.id_pedido) return;

        this.loading = true;
        this.ventaService.cambiarEstadoPedido(this.estado.id_pedido_estado, this.pedido?.id_pedido).subscribe({
            next: resp => {
                this.message.add({severity: 'success', summary: 'Estado actualizado a '+this.estado?.nombre});
                if(this.pedido?.estado){
                    this.pedido.estado = this.estado;
                }
                this.loading = false;
            }
        });
    }

    public generarFactura(): void {
        const contenido = [];

        // Encabezado de la tabla
        const encabezado = [
            'ID',
            'Nombre',
            'Precio',
            'Cantidad',
            'Total'
        ];

        contenido.push(encabezado);

        if(!this.pedido?.pedido_productos) return;

        this.pedido?.pedido_productos.forEach(productoP => {
            const fila = [
                productoP?.producto?.id_producto || 0,
                productoP?.producto?.nombre || '',
                `$${(productoP.producto?.precio_unit || 0) * (productoP.producto?.cantidad_por_caja || 0)}`,
                productoP.cantidad,
                `$${(productoP.producto?.precio_unit || 0) * (productoP.producto?.cantidad_por_caja || 0) * (productoP.cantidad || 0)}`,
            ];
            contenido.push(fila);
        });

        // Obtener el nombre de la empresa, su logo y la fecha actual (reemplaza estos datos con los tuyos)
        const nombreEmpresa = '131CodeLines - Cosmos';

        const fecha = new Date().toLocaleDateString(); // Obtener la fecha actual en formato legible

        // Definir el contenido del documento PDF con el título, logo de la empresa y la fecha
        const documentoDefinition: any = {
            content: [
            {
                text: nombreEmpresa, // Agregar el nombre de la empresa como título
                style: 'encabezado'
            },
            {
                text: `Fecha: ${fecha}`, // Agregar la fecha
                style: 'fecha'
            },
            {
                text: 'Factura de Productos',
                style: 'encabezado'
            },
            {
                table: {
                headerRows: 1,
                widths: ['*', '*', '*', '*', '*'],
                body: contenido
                }
            }
            ],
            styles: {
            encabezado: {
                fontSize: 18,
                bold: true,
                margin: [0, 0, 0, 10]
            },
            fecha: {
                alignment: 'right',
                margin: [0, 0, 0, 10]
            }
            }
        };

        const pdfDoc = pdfMake.createPdf(documentoDefinition);
        pdfDoc.open();
    }



}

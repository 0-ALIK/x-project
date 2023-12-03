import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pedidos, reclamos } from 'src/app/interfaces/data';
import { Pedido } from 'src/app/interfaces/pedido.interface';
import { Cliente, Empresa } from 'src/app/interfaces/usuario.inteface';
import { ImportesCalcService } from '../../services/importes-calc.service';
import { Producto } from 'src/app/interfaces/producto.iterface';
import { Reclamo } from 'src/app/interfaces/raclamo.interface';
import { VentasService } from 'src/app/services/ventas.service';


@Component({
    selector: 'app-ver-pedido-by-id',
    template: `
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
                <div class="mb-2" *ngIf="reclamo">
                    <h2 class="text-lg m-0 p-0">Reclamo</h2>
                    <ticket-card [reclamo]="reclamo"></ticket-card>
                </div>
                <div class="mb-2">
                    <h2 class="text-lg m-0 p-0">Impote de la venta</h2>
                    <p-inputNumber
                        [(ngModel)]="importe"
                        [readonly]="true"
                        inputId="currency-us"
                        mode="currency"
                        currency="USD"
                        locale="en-US">
                    </p-inputNumber>
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

    public cliente: Cliente | undefined;

    public producto: Producto | undefined;

    public pedido: Pedido | undefined;

    public empresa: Empresa | undefined;

    public tieneEmpresa: boolean = false;

    public importe: number | undefined;

    public importePagado: number | undefined;

    public reclamo: Reclamo | undefined;

    public constructor(
        private activatedRoute: ActivatedRoute,
        public importesCalc: ImportesCalcService,
        private ventaService: VentasService
    ) {}

    public ngOnInit(): void {
        this.activatedRoute.params.subscribe({
            next: ({id}) => {
                this.obtenerPedido(Number(id));
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

}

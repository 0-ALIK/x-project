import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pedidos, reclamos } from 'src/app/interfaces/data';
import { Pedido } from 'src/app/interfaces/pedido.interface';
import { Cliente, Empresa } from 'src/app/interfaces/usuario.inteface';
import { ImportesCalcService } from '../../services/importes-calc.service';
import { Producto } from 'src/app/interfaces/producto.iterface';
import { Reclamo } from 'src/app/interfaces/raclamo.interface';


@Component({
  selector: 'app-ver-pedido-by-id',
  templateUrl: './ver-pedido-by-id.component.html',
})
export class VerPedidoByIdComponent implements OnInit {

    public cliente: Cliente | undefined;

    public producto: Producto | undefined;

    public pedido: Pedido | undefined;

    public empresa: Empresa | undefined;

    public tieneEmpresa: boolean = true;

    public importe: number | undefined;

    public importeDebido: number | undefined;

    public reclamo: Reclamo | undefined;

    public constructor(
        private activatedRoute: ActivatedRoute,
        public importesCalc: ImportesCalcService
    ) {}

    public ngOnInit(): void {
        setTimeout(() => {
            this.obtenerPedido();
        }, 2000);
    }

    private obtenerPedido(): void {
        this.activatedRoute.params.subscribe({
            next: ({id}) => {
                this.pedido = pedidos.find(p => p.id_pedido === Number(id));
                this.cliente = this.pedido?.cliente;
                this.empresa = this.cliente?.empresa;
                this.reclamo = reclamos.find(r => r.cliente?.id_cliente === this.cliente?.id_cliente);

                console.log(this.reclamo);
                this.importe = this.importesCalc.calcularImporte( this.pedido?.pedido_producto || []);
                this.importeDebido = this.importesCalc.calcularImporteDebido(
                    this.pedido?.pedido_producto || [],
                    this.pedido?.pagos || []
                );

                if(!this.empresa) {
                    this.tieneEmpresa = false;
                }
            }
        });
    }

}

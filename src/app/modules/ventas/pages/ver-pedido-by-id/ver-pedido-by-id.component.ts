import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pedidos } from 'src/app/interfaces/data';
import { Pedido } from 'src/app/interfaces/pedido.interface';
import { Cliente } from 'src/app/interfaces/usuario.inteface';

@Component({
  selector: 'app-ver-pedido-by-id',
  templateUrl: './ver-pedido-by-id.component.html',
})
export class VerPedidoByIdComponent implements OnInit {

    public cliente: Cliente | undefined;

    public pedido: Pedido | undefined;

    public constructor(
        private activatedRoute: ActivatedRoute
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
            }
        });
    }

}

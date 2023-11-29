import { Pedido, PedidoProductos } from 'src/app/interfaces/pedido.interface';
import { pedidos, productos } from 'src/app/interfaces/data';
import { Component } from '@angular/core';


@Component({
  selector: 'app-ver-ventas',
  templateUrl: './ver-ventas.component.html',
  styleUrls: ['./ver-ventas.component.css']
})
export class VerVentasComponent {

    public pedido: Pedido | undefined;



    ngOnInit(): void {

    }

     private cargarDatos(): void{
     }

}

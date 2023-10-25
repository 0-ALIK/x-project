import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Pedido } from 'src/app/interfaces/pedido.interface';

@Component({
  selector: 'app-ventas-table',
  templateUrl: './ventas-table.component.html',
  styleUrls: ['./ventas-table.component.css']
})
export class VentasTableComponent implements OnInit {

    @ViewChild('tablePedidos')
    public tablePedidos: Table | undefined

    public pedidos: Pedido[] = [
        {
            cliente: {
                nombre: 'Alik',
                apellido: 'Dev',
                foto: 'https://res.cloudinary.com/duwsb7fbe/image/upload/v1697773715/xd_upxbh0.jpg'
            },
            empresa: {
                nombre: 'Dell',
                foto: 'https://res.cloudinary.com/duwsb7fbe/image/upload/v1697773715/xd_upxbh0.jpg'
            },
            fecha: new Date(),
            forma_pago: 'tarjeta',
            estado: 'proceso'
        },
        {
            cliente: {
                nombre: 'Alik',
                apellido: 'Dev',
                foto: 'https://res.cloudinary.com/duwsb7fbe/image/upload/v1697773715/xd_upxbh0.jpg'
            },
            empresa: {
                nombre: 'Dell',
                foto: 'https://res.cloudinary.com/duwsb7fbe/image/upload/v1697773715/xd_upxbh0.jpg'
            },
            fecha: new Date(),
            forma_pago: 'tarjeta',
            estado: 'proceso'
        }
    ];

    public ngOnInit(): void {
        if(!this.tablePedidos) return;
    }

    public example( evento: any ): void {
        console.log('filtro personalizado');
        console.log( evento );
    }

}

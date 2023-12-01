import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { direcciones, pedidos, provincias, reclamos } from 'src/app/interfaces/data';
import { Direccion, Provincia } from 'src/app/interfaces/direccion.interface';
import { Pedido } from 'src/app/interfaces/pedido.interface';
import { Reclamo } from 'src/app/interfaces/raclamo.interface';


@Component({
    selector: 'app-perfil-cliente',
    templateUrl: './perfil-cliente.component.html',
    styleUrls: ['./perfil-cliente.component.css']
})
export class PerfilClienteComponent implements OnInit{


    public items: MenuItem[] | undefined;

    public activeItem: MenuItem | undefined;

    public provincias: Provincia[] = [];

    public provinciaSelected: Provincia | undefined;

    public direcciones: Direccion[] = direcciones;

    public reclamos: Reclamo[] = reclamos;

    public pedidos: Pedido[] = pedidos;

    constructor (
        private activatedRoute: ActivatedRoute
    ) {

    }

    public ngOnInit():void {
        this.items = [
            { label: 'Informacion' },
            { label: 'Direcciones' },
            { label: 'Reclamos' },
            { label: 'Pedidos' }

        ];
        this.activeItem = this.items[0];
        console.log(this.activeItem.label);

        this.activatedRoute.params.subscribe({
            next: ({id}) => {


            }
        });

        this.provincias = provincias;
    }

    public onChange(event:MenuItem):void {
        this.activeItem = event;
    }

}

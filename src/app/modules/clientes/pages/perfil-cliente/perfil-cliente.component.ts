import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.css']
})



export class PerfilClienteComponent implements OnInit{

    public items: MenuItem[] | undefined;
    public activeItem: MenuItem | undefined;

    public ngOnInit():void {
        this.items = [
            { label: 'Informacion' },
            { label: 'Direcciones' },
            { label: 'Reclamos' },
            { label: 'Pedidos' }
        ];
        this.activeItem = this.items[0];
        console.log(this.activeItem.label);

    }

    public onChange(event:MenuItem):void {
        this.activeItem = event;
    }

}

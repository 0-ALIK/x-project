import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-ver-clientes',
  templateUrl: './ver-clientes.component.html',
  styleUrls: ['./ver-clientes.component.css']
})
export class VerClientesComponent implements OnInit {


    public arregloSolicitudes: any[] = [
        {
            nombre: 'xd', propietario: 'flavio', archivo: 'flacio', foto: '8888888'
        },
    ]


    public titulo: string | undefined = 'Clientes';
    public items: MenuItem[] | undefined;
    public activeItem: MenuItem | undefined;

    public ngOnInit():void {
        this.items = [
            { label: 'Clientes', icon: 'pi pi-fw pi-users' },
            { label: 'Empresas', icon: 'pi pi-fw pi-building' },
            { label: 'Solicitudes', icon: 'pi pi-fw pi-paperclip' }
        ];
        this.activeItem = this.items[0];
        console.log(this.activeItem.label);

    }

    public onChange(event:MenuItem):void {
        this.titulo = event.label;
        this.activeItem = event;
    }

}

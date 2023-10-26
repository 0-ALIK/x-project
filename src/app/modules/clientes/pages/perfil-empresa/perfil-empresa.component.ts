import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-perfil-empresa',
  templateUrl: './perfil-empresa.component.html',
  styleUrls: ['./perfil-empresa.component.css']
})
export class PerfilEmpresaComponent {

    public items: MenuItem[] | undefined;
    public activeItem: MenuItem | undefined;

    public ngOnInit():void {
        this.items = [
            { label: 'Informacion' },
            { label: 'Colaboradores' },
            { label: 'Sucursales' },
            { label: 'Pedidos' }
        ];
        this.activeItem = this.items[0];
        console.log(this.activeItem.label);

    }

    public onChange(event:MenuItem):void {
        this.activeItem = event;
    }
}

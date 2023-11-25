import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { direcciones, pedidos, provincias } from 'src/app/interfaces/data';
import { Direccion, Provincia } from 'src/app/interfaces/direccion.interface';
import { AgregarColaboradorComponent } from '../../components/agregar-colaborador/agregar-colaborador.component';
import { AgregarSucursalComponent } from '../../components/agregar-sucursal/agregar-sucursal.component';
import { Pedido } from 'src/app/interfaces/pedido.interface';

@Component({
  selector: 'app-perfil-empresa',
  templateUrl: './perfil-empresa.component.html',
  styleUrls: ['./perfil-empresa.component.css']
})
export class PerfilEmpresaComponent {

    public pedidos: Pedido[] = pedidos;

    public items: MenuItem[] | undefined;
    public activeItem: MenuItem | undefined;

    public provincias: Provincia[] = provincias;

    public provinciaSelected: Provincia | undefined;

    public direcciones: Direccion[] = direcciones;

    private ref: DynamicDialogRef | undefined;

    public constructor(
        public dialogService: DialogService,
    ) {}

    public ngOnInit():void {
        this.items = [
            { label: 'Informacion' },
            { label: 'Sucursales' },
            { label: 'Colaboradores' },
            { label: 'Pedidos' }
        ];
        this.activeItem = this.items[0];
        console.log(this.activeItem.label);
    }

    public onChange(event:MenuItem):void {
        this.activeItem = event;
    }

    public agregarColaborador(): void {
        this.ref = this.dialogService.open(AgregarColaboradorComponent, {
            header: 'Agregar Colaborador',
        });
    }

    public agregarSucursal(): void {
        this.ref = this.dialogService.open(AgregarSucursalComponent, {
            header: 'Agregar Sucursal',
        });
    }
}

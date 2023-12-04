import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { direcciones, pedidos, provincias } from 'src/app/interfaces/data';
import { Direccion, Provincia } from 'src/app/interfaces/direccion.interface';
import { AgregarColaboradorComponent } from '../../components/agregar-colaborador/agregar-colaborador.component';
import { AgregarSucursalComponent } from '../../components/agregar-sucursal/agregar-sucursal.component';
import { Pedido } from 'src/app/interfaces/pedido.interface';
import { ActivatedRoute } from '@angular/router';
import { DireccionService } from 'src/app/services/direccion.service';
import { Empresa } from 'src/app/interfaces/usuario.inteface';
import { ApiEmpresaService } from 'src/app/services/api-empresa.service';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-perfil-empresa',
  templateUrl: './perfil-empresa.component.html',
  styleUrls: ['./perfil-empresa.component.css']
})
export class PerfilEmpresaComponent {

    public pedidos: Pedido[] = [];

    public items: MenuItem[] | undefined;
    public activeItem: MenuItem | undefined;

    public provincias: Provincia[] = provincias;

    public provinciaSelected: Provincia | undefined;

    public direcciones: Direccion[] = [];

    public empresa: Empresa | undefined;

    private ref: DynamicDialogRef | undefined;

    public constructor(
        public dialogService: DialogService,
        private activatedRoute: ActivatedRoute,
        private apiService: DireccionService,
        private empresaService: ApiEmpresaService,
        private ventasService: VentasService
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

        const formData = new FormData();

        this.activatedRoute.params.subscribe({
            next: ({id, nombre_empresa}) => {

                this.apiService.getDireccionEmpresa(id).subscribe((resp:any)=>{
                    this.direcciones = resp;
                }),

                this.empresaService.getDatosEmpresa(id).subscribe((resp:any)=>{
                    this.empresa = resp[0];
                    nombre_empresa = this.empresa?.nombre
                }),

                this.ventasService.getAllPedidos().subscribe({
                    next: pedidos => {
                        this.pedidos = pedidos.filter(p => p.cliente?.empresa?.id_empresa === Number(id));
                    }
                });

                formData.append('nombre',nombre_empresa);
                this.empresaService.getColaboradores(id,nombre_empresa).subscribe((resp:any)=>{
                    this.arregloColaboradores = resp;
                    console.log(resp)
                })
            }
        });
    }


    public arregloColaboradores: any[] = [];

    public onChange(event:MenuItem):void {
        this.activeItem = event;
    }

    public agregarColaborador(id_empresa:any): void {
        this.ref = this.dialogService.open(AgregarColaboradorComponent, {
            header: 'Agregar Colaborador',
            data: {
                id_empresa: id_empresa
               }
        });
    }

    public agregarSucursal(id_empresa:any): void {
        console.log(id_empresa)
        this.ref = this.dialogService.open(AgregarSucursalComponent, {
            header: 'Agregar Direccion',
            data: {
               id_empresa: id_empresa
              }
        });
    }
}

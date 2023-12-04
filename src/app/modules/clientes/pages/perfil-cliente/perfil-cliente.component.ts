import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { direcciones, pedidos, provincias, reclamos } from 'src/app/interfaces/data';
import { Direccion, Provincia } from 'src/app/interfaces/direccion.interface';
import { Pedido } from 'src/app/interfaces/pedido.interface';
import { Reclamo } from 'src/app/interfaces/raclamo.interface';
import { Cliente } from 'src/app/interfaces/usuario.inteface';
import { ApiClienteService } from 'src/app/services/api-cliente.service';
import { DireccionService } from 'src/app/services/direccion.service';
import { AgregarDireccionComponent } from '../../components/agregar-direccion/agregar-direccion/agregar-direccion.component';
import { VentasService } from 'src/app/services/ventas.service';
import { EditarDireccionComponent } from '../../components/editar-direccion/editar-direccion/editar-direccion.component';


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

    public pedidos: Pedido[] = [];

    public cliente: Cliente | undefined;

    private ref: DynamicDialogRef | undefined;

    public constructor(
        public dialogService: DialogService,
        private activatedRoute: ActivatedRoute,
        private apiService: DireccionService,
        private clienteService: ApiClienteService,
        private ventaService: VentasService
    ) {}

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

                this.apiService.getDireccionCliente(id).subscribe((resp:any)=>{
                    this.direcciones = resp
                }),

                this.clienteService.getDatosCliente(id).subscribe((resp:any)=>{
                    this.cliente = resp
                })

                this.ventaService.getAllPedidos().subscribe({
                    next: (pedidos:any) => {
                        this.pedidos = pedidos.filter((p: any) => {
                            console.log(p.cliente_id, id);

                            return p.cliente_id === Number(id)
                        });
                    }
                });
            }
        });

        this.provincias = provincias;
    }

    public agregarDireccion(id_cliente:any){

        console.log(id_cliente)
        this.ref = this.dialogService.open(AgregarDireccionComponent, {
            header: 'Agregar Direccion',
            data: {
               id_cliente: id_cliente
              }
        });

    }

    public editarDireccion(id_empresa:any):void{

        this.ref = this.dialogService.open(EditarDireccionComponent, {
            header: 'Editar Direccion',
            data: {
               id_empresa: id_empresa,
               direcciones: this.direcciones
              }
        });

    }

    public onChange(event:MenuItem):void {
        this.activeItem = event;
    }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { empresas } from 'src/app/interfaces/data';
import { Empresa } from 'src/app/interfaces/usuario.inteface';
import { ApiEmpresaService } from 'src/app/services/api-empresa.service';
import { EliminarClienteComponent } from '../eliminar-cliente/eliminar-cliente.component';

@Component({
  selector: 'app-empresas-table',
  templateUrl: './empresas-table.component.html',
  styleUrls: ['./empresas-table.component.css']
})
export class EmpresasTableComponent {


    tabs: MenuItem[] | undefined;

    activeItem: MenuItem | undefined;

    first = 0;

    rows = 10;

    public arregloEmpresas: Empresa[] = [];

    public ref: DynamicDialogRef | undefined;

    public constructor (
        public dialogService: DialogService,
        private messageService: MessageService,
        private router: Router,
        private apiService: ApiEmpresaService
        ) {
        this.apiService.getEmpresas().subscribe((resp:any)=>{
            console.log(resp)
            this.arregloEmpresas = resp
        })
    }

    public ngOnInit(): void {

        this.tabs = [
            { label: 'Home', icon: 'pi pi-fw pi-home' },
            { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
            { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
            { label: 'Documentation', icon: 'pi pi-fw pi-file' },
            { label: 'Settings', icon: 'pi pi-fw pi-cog' }
        ];

        this.activeItem = this.tabs[0];
    }

    next() {
        this.first = this.first + this.rows;
    }

    prev() {
        this.first = this.first - this.rows;
    }

    reset() {
        this.first = 0;
    }

    pageChange(event: any) {
        this.first = event.first;
        this.rows = event.rows;
    }

    isLastPage(): boolean {
        return false;
        // this.customers ? this.first === this.customers.length - this.rows : true;
    }

    isFirstPage(): boolean {
        return false;
        // this.customers ? this.first === 0 : true;
    }

    public onRowSelect(event: any): void {
        const { id_empresa } = event.data;
        const { nombre_empresa} = event.data;
        this.router.navigate(['/app/clientes/perfil/empresa', id_empresa]);
        this.router.navigate(['/app/clientes/perfil/empresa', nombre_empresa]);
    }

    showEliminarEmpresa(id_empresa: any, nombre_empresa: any): void {

        this.ref = this.dialogService.open(EliminarClienteComponent, {
            header: 'Empresa: '+nombre_empresa,
            height: '30%',
            width:'30%'


        });

        this.ref.onClose.subscribe((result) => {
            if (result) {
              this.apiService.eliminarEmpresa(id_empresa).subscribe((resp:any)=>{
                console.log('Se elimino correctamente')
            })

            } else {
              console.log('No se elimino ningun cliente ');
            }
          });
        }


}

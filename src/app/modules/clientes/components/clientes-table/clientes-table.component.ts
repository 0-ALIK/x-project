import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/usuario.inteface';
import { clientes } from 'src/app/interfaces/data';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ReporteClienteComponent } from 'src/app/modules/analitica/components/reporte-cliente.component';

@Component({
  selector: 'app-clientes-table',
  templateUrl: './clientes-table.component.html',
  styleUrls: ['./clientes-table.component.css']
})
export class ClientesTableComponent {

    public tabs: MenuItem[] | undefined;

    public activeItem: MenuItem | undefined;

    public first = 0;

    public rows = 10;

    public arregloClientes: Cliente[] = clientes;

    public ref: DynamicDialogRef | undefined;

    public constructor(
        public dialogService: DialogService,
        private router: Router
    ) { }

    public showGenerarReporte(): void {
        this.ref = this.dialogService.open(ReporteClienteComponent, {
            header: 'Generar Reporte',
            height: '70%'
        });
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

    public next(): void {
        this.first = this.first + this.rows;
    }

    public prev(): void {
        this.first = this.first - this.rows;
    }

    public reset(): void {
        this.first = 0;
    }

    public pageChange(event: any): void {
        this.first = event.first;
        this.rows = event.rows;
    }

    public isLastPage(): boolean {
        return false;
        // this.customers ? this.first === this.customers.length - this.rows : true;
    }

    public isFirstPage(): boolean {
        return false;
        // this.customers ? this.first === 0 : true;
    }

    public onRowSelect(event: any): void {
        const { id_cliente } = event.data;
        this.router.navigate(['/app/clientes/perfil/cliente', id_cliente]);
    }

}

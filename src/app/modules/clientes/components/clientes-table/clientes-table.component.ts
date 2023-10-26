import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

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

    public arregloClientes: any[] = [
        {
            id: 1, foto: 'https://res.cloudinary.com/duwsb7fbe/image/upload/v1697773715/xd_upxbh0.jpg', nombre: 'Flavio', apellido: 'Sánchez', cedula: 'flacio', genero: '8888888', telefono: '66782932', correo: 'asdnkasjdnk', frecuencia: 'asd', empresa: '10'
        },
        {
            id: 2, foto: 'https://res.cloudinary.com/duwsb7fbe/image/upload/v1697773715/xd_upxbh0.jpg', nombre: 'Flavio', apellido: 'Sánchez', cedula: 'flacio', genero: '8888888', telefono: '66782932', correo: 'asdnkasjdnk', frecuencia: 'asd', empresa: '10'
        },
        {
            id: 3, foto: 'https://res.cloudinary.com/duwsb7fbe/image/upload/v1697773715/xd_upxbh0.jpg', nombre: 'Flavio', apellido: 'Sánchez', cedula: 'flacio', genero: '8888888', telefono: '66782932', correo: 'asdnkasjdnk', frecuencia: 'asd', empresa: '10'
        }
    ];

    public constructor(
        private router: Router
    ) {}

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
        const { id } = event.data;
        this.router.navigate(['/dashboard/clientes/perfil', id]);
    }

}

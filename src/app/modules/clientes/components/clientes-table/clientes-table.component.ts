import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-table',
  templateUrl: './clientes-table.component.html',
  styleUrls: ['./clientes-table.component.css']
})
export class ClientesTableComponent {

    tabs: MenuItem[] | undefined;

    activeItem: MenuItem | undefined;

    first = 0;

    rows = 10;

    public arregloClientes: any[] = [
        {
            foto: 'https://res.cloudinary.com/duwsb7fbe/image/upload/v1697773715/xd_upxbh0.jpg', nombre: 'Flavio', apellido: 'Sánchez', cedula: 'flacio', genero: '8888888', telefono: '66782932', correo: 'asdnkasjdnk', frecuencia: 'asd', empresa: '10'
        },
        {
            foto: 'https://res.cloudinary.com/duwsb7fbe/image/upload/v1697773715/xd_upxbh0.jpg', nombre: 'Flavio', apellido: 'Sánchez', cedula: 'flacio', genero: '8888888', telefono: '66782932', correo: 'asdnkasjdnk', frecuencia: 'asd', empresa: '10'
        },
        {
            foto: 'https://res.cloudinary.com/duwsb7fbe/image/upload/v1697773715/xd_upxbh0.jpg', nombre: 'Flavio', apellido: 'Sánchez', cedula: 'flacio', genero: '8888888', telefono: '66782932', correo: 'asdnkasjdnk', frecuencia: 'asd', empresa: '10'
        }
    ];

    ngOnInit() {

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

    onRowSelect(event: any) {
        this.router.navigate(['./dashboard/inventario'])
    }

    constructor(private router: Router){

    }



}

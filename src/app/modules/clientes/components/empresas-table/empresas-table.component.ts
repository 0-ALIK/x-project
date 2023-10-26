import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

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

    public arregloEmpresas: any[] = [
        {
            id: 1, foto: 'xd', nombre: 'flavio', propietario: 'flacio', ruc: '8888888', telefono: '66782932', direccion: 'asdnkasjdnk', campos: 'asd', total: '10'
        },
        {
            id: 2, foto: 'xd', nombre: 'flavio', propietario: 'flacio', ruc: '8888888', telefono: '66782932', direccion: 'asdnkasjdnk', campos: 'asd', total: '10'
        },
        {
            id: 3, foto: 'xd', nombre: 'flavio', propietario: 'flacio', ruc: '8888888', telefono: '66782932', direccion: 'asdnkasjdnk', campos: 'asd', total: '10'
        }

    ]

    public constructor (
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
        const { id } = event.data;
        this.router.navigate(['/dashboard/clientes/perfil', id]);
    }
}

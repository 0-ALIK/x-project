import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-ver-dashboard',
    templateUrl: './ver-dashboard.component.html'
})
export class VerDashboardComponent implements OnInit {

    public items: MenuItem[] | undefined;
    public activeItem: MenuItem | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Ventas', icon: 'pi pi-fw pi-dollar' },
            { label: 'Clientes', icon: 'pi pi-fw pi-users' },
            { label: 'Inventario', icon: 'pi pi-fw pi-truck' }
        ];

        this.activeItem = this.items[0];
    }

    public onChange( event:MenuItem ): void {
        this.activeItem = event;
    }
}

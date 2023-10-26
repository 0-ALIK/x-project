import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/menu-item.interface';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'alik-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    @ViewChild('sidebar')
    public sidebar: ElementRef<HTMLElement> | undefined;

    public menuItems: MenuItem[] | undefined;

    public constructor (
        public sidebarService: SidebarService
    ) {}

    public ngOnInit(): void {
        this.rellenarMenuItem();
    }

    private rellenarMenuItem(): void {
        this.menuItems = [
            {
                label: 'Home',
                icon: 'pi pi-fw pi-home',
                route: '/dashboard'
            },
            {
                label: 'Inventario',
                icon: 'pi pi-fw pi-box',
                route: '/dashboard/inventario'
            },
            {
                label: 'Ventas',
                icon: 'pi pi-fw pi-shopping-bag',
                route: '/dashboard/ventas'
            },
            {
                label: 'Clientes',
                icon: 'pi pi-fw pi-users',
                route: '/dashboard/clientes'
            },
            {
                label: 'Tickets',
                icon: 'pi pi-fw pi-ticket',
                route: '/dashboard/tickets'
            },
            {
                label: 'chat',
                icon: 'pi pi-fw pi-comments',
                route: '/dashboard/chat'
            },
            {
                label: 'Blog',
                icon: 'pi pi-fw pi-globe',
                route: '/dashboard/blog'
            },
            {
                label: 'Usuarios',
                icon: 'pi pi-fw pi-user-edit',
                route: '/dashboard/usuarios'
            },
            {
                label: 'Analíticas',
                icon: 'pi pi-fw pi-chart-pie',
                route: '/dashboard/analitica'
            }
        ];
    }
}

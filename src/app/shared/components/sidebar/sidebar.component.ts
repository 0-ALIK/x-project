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
                label: 'Inventario',
                icon: 'pi pi-fw pi-box',
                route: '/app/inventario'
            },
            {
                label: 'Ventas',
                icon: 'pi pi-fw pi-shopping-bag',
                route: '/app/ventas'
            },
            {
                label: 'Clientes',
                icon: 'pi pi-fw pi-users',
                route: '/app/clientes'
            },
            {
                label: 'Tickets',
                icon: 'pi pi-fw pi-ticket',
                route: '/app/tickets'
            },
            {
                label: 'Chat',
                icon: 'pi pi-fw pi-comments',
                route: '/app/chat'
            },
            {
                label: 'Blog',
                icon: 'pi pi-fw pi-globe',
                route: '/app/blog'
            },
            {
                label: 'Usuarios',
                icon: 'pi pi-fw pi-user-edit',
                route: '/app/usuarios'
            },
            {
                label: 'Analíticas',
                icon: 'pi pi-fw pi-chart-pie',
                route: '/app/analitica'
            }
        ];
    }
}

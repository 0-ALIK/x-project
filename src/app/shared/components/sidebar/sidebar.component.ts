import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/menu-item.interface';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
    selector: 'alik-sidebar',
    template: `
        <div class="back"
        [ngClass]="{ 'back_show': sidebarService.sidebarActivo, '': !sidebarService.sidebarActivo, }"
        (click)="sidebarService.sidebarActivo = false"></div>

        <aside class="sidebar" #sidebar [ngClass]="{ 'sidebar_show': sidebarService.sidebarActivo, '': !sidebarService.sidebarActivo, }">
            <section>
                <!-- Logo app -->
                <article class="sidebar-logo">
                    <img src="assets/logo.png" alt="logo">
                    <h1>Cosmos ERP</h1>
                </article>

                <hr>

                <!-- Menu items -->
                <article>
                    <ul class="sidebar-menu">
                        <li class="sidebar-menu-item"
                            *ngFor="let item of menuItems"
                            [routerLink]="item.route"
                            routerLinkActive="sidebar-menu-item_active"
                            (click)="sidebarService.sidebarActivo = false">

                            <span [class]="item.icon"></span>
                            <p>{{ item.label }}</p>
                        </li>
                    </ul>
                </article>
            </section>

            <!-- Link hacia la documentacion -->
            <article>
                <div class="sidebar-menu-item" [routerLink]="['/app/docs']">
                    <span class="pi pi-fw pi-question-circle"></span>
                    <p>Ayuda</p>
                </div>
            </article>
        </aside>
    `,
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
        if(!localStorage.getItem('usuario')) return;
        const usuario = JSON.parse(localStorage.getItem('usuario') || '');

        console.log(usuario);

        if(usuario.tipo === 'admin') {
            this.rellenarMenuItem();
        } else if(usuario.tipo === 'cliente') {
            if(Array.isArray(usuario.data)) {
                const id: number = usuario.data[0].id_cliente;
                this.rellenarMenuItemCliente(id);
            } else {
                const id: number = usuario.data.id_cliente;
                this.rellenarMenuItemCliente(id);
            }
        } else {
            if(Array.isArray(usuario.data)) {
                const id: number = usuario.data[0].id_empresa;
            this.rellenarMenuItemEmpresa(id);
            } else {
                const id: number = usuario.data.id_empresa;
                this.rellenarMenuItemCliente(id);
            }
        }
    }

    private rellenarMenuItemEmpresa(id: number):void {
        const ruta = '/app/clientes/perfil/empresa/'+id

        this.menuItems = [
            {
                label: 'Perfil',
                icon: 'pi pi-fw pi-user',
                route: ruta
            },
        ];
    }

    private rellenarMenuItemCliente(id: number): void {
        const ruta = '/app/clientes/perfil/cliente/'+id
        console.log(ruta);
        this.menuItems = [
            {
                label: 'Perfil',
                icon: 'pi pi-fw pi-user',
                route: ruta
            },
            {
                label: 'Productos',
                icon: 'pi pi-fw pi-shopping-bag',
                route: '/app/ventas/c/ecommerce'
            },
            {
                label: 'Carrito',
                icon: 'pi pi-fw pi-shopping-cart',
                route: '/app/ventas/c/carrito'
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
            }
        ];
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { notificaciones } from 'src/app/interfaces/data';
import { Notificacion, Usuario } from 'src/app/interfaces/usuario.inteface';
import { SidebarService } from 'src/app/services/sidebar.service';
import { ThemesService } from 'src/app/services/themes.service';

@Component({
  selector: 'alik-nav',
  template: `
    <p-overlayPanel #op styleClass="w-25rem h-25rem overflow-y-scroll">
        <ng-template pTemplate="content">

            <h3 class="m-0 mb-2">Notificaciones</h3>
            <div>

                <article
                    *ngFor="let noti of notificaciones; let lastItem = last"
                    [routerLink]="[noti.ruta]">
                    <div class="flex gap-2 cursor-pointer">
                        <div class="w-3rem h-3rem bg-primary border-round flex justify-content-center align-items-center">
                            <i [class]="'pi w-1rem ' + noti.icono"></i>
                        </div>
                        <div>
                            <p class="m-0">{{ noti.titulo }}</p>
                            <p class="m-0 text-sm">{{ noti.contenido }}</p>
                        </div>
                    </div>
                    <hr *ngIf="!lastItem">
                </article>

            </div>
        </ng-template>
    </p-overlayPanel>

    <p-menu #menu [model]="avatarMenuItems" [popup]="true"></p-menu>

    <p-sidebar [(visible)]="sidebarVisible" position="right" [style]="{ witdh: '200px' }">
        <h2>Selecciona un tema</h2>
        <div>
            <p-button label="Claro" (onClick)="themesService.switchTheme('viva-light')"></p-button>
            <p-button label="Oscuro" [style]="{ marginLeft: '10px' }" (onClick)="themesService.switchTheme('viva-dark')"></p-button>
        </div>
    </p-sidebar>

    <nav class="nav backdrop">

        <article class="nav-toggle">
            <p-button icon="pi pi-bars" [rounded]="true" [text]="true" (onClick)="sidebarService.sidebarActivo = true"></p-button>
        </article>

        <section class="nav-actions">

            <article>
                <p-button icon="pi pi-cog" [rounded]="true" [text]="true" (onClick)="sidebarVisible = true"></p-button>

                <p-button icon="pi pi-bell" [rounded]="true" [text]="true" (click)="op.toggle($event)"></p-button>
            </article>

            <article>
                <div (click)="menu.toggle( $event )" class="avatar-cursor">
                    <p-avatar
                        *ngIf="!usuario?.foto"
                        [label]="usuario?.nombre?.charAt(0)"
                        shape="circle">
                    </p-avatar>
                    <p-avatar
                        *ngIf="usuario?.foto"
                        [image]="usuario?.foto"
                        shape="circle">
                    </p-avatar>
                </div>
            </article>

        </section>

    </nav>
  `,
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    public sidebarVisible: boolean = false;

    public avatarMenuItems: MenuItem[] | undefined;

    public notificaciones: Notificacion[] = notificaciones;

    public usuario: Usuario | undefined;

    public constructor (
        public sidebarService: SidebarService,
        public themesService: ThemesService,
        public router: Router
    ) {}

    public ngOnInit(): void {
        if(!localStorage.getItem('usuario')) return;
            const usuario = JSON.parse(localStorage.getItem('usuario') || '');

        this.usuario = usuario.data;

        if(!this.usuario) return;

        console.log(usuario);

        let link = '/app'

        if(usuario.tipo === 'cliente') {
            link = '/app/clientes/perfil/cliente/'+usuario.data.id_cliente;
        } else {
            link = '/app/clientes/perfil/empresa/'+usuario.data.id_empresa;
        }

        this.avatarMenuItems = [
            {
                label: usuario.data.nombre + ' ' + usuario.data?.apellido || '',
                items: [
                    {
                        label: 'Ver perfil',
                        routerLink: link
                    },
                    {
                        label: 'Cerrar sesión',
                        command: () => { this.cerrarSesion() }
                    }
                ]
            }
        ]
    }

    private cerrarSesion():void {
        localStorage.removeItem('usuario');
        localStorage.removeItem('token');
        this.router.navigate(['/']);
    }

}

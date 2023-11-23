import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-ver-clientes',
  templateUrl: './ver-clientes.component.html',
  styleUrls: ['./ver-clientes.component.css']
})
export class VerClientesComponent implements OnInit {



    public constructor(
        private router: Router,
        private apiService: SolicitudService
    ) {
        this.apiService.getSolicitudes().subscribe((resp:any)=>{
            this.arregloSolicitudes = resp.data
        })
    }

    public arregloSolicitudes: any[] = [
    ]


    public titulo: string | undefined = 'Clientes';
    public items: MenuItem[] | undefined;
    public activeItem: MenuItem | undefined;

    public ngOnInit():void {
        this.items = [
            { label: 'Clientes', icon: 'pi pi-fw pi-users' },
            { label: 'Empresas', icon: 'pi pi-fw pi-building' },
            { label: 'Solicitudes', icon: 'pi pi-fw pi-paperclip' }
        ];
        this.activeItem = this.items[0];
        console.log(this.activeItem.label);

    }

    public onChange(event:MenuItem):void {
        this.titulo = event.label;
        this.activeItem = event;
    }

}

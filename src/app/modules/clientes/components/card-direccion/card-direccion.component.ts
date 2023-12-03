import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { Direccion } from 'src/app/interfaces/direccion.interface';
import { Empresa } from 'src/app/interfaces/usuario.inteface';
import { ApiEmpresaService } from 'src/app/services/api-empresa.service';
import { DireccionService } from 'src/app/services/direccion.service';

@Component({
    selector: 'alik-card-direccion',
    templateUrl: './card-direccion.component.html'
})
export class CardDireccionComponent {

    @Input('direccion')
    public direccion: any | undefined;

    @Input('fondo')
    public fondo: boolean = false;

    constructor(
        public apiService: ApiEmpresaService,
    ){

    }

    public eliminarSucursal(id_direccion: any, id_empresa:any){
        this.apiService.eliminarSucursal(id_direccion,id_empresa).subscribe((resp:any)=>{

        })
    }

}

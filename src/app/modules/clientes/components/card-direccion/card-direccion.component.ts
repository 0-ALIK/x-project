import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { Direccion } from 'src/app/interfaces/direccion.interface';
import { DireccionService } from 'src/app/services/direccion.service';

@Component({
    selector: 'alik-card-direccion',
    templateUrl: './card-direccion.component.html'
})
export class CardDireccionComponent {

    @Input('direccion')
    public direccion: Direccion | undefined;

    @Input('fondo')
    public fondo: boolean = false;


    public arregloDirecciones: Direccion[] = [];

    public constructor(
        public dialogService: DialogService,
        private router: Router,
        private apiService: DireccionService
    ) {
        this.apiService.getDireccion().subscribe((resp:any)=>{
            //console.log(resp)
            this.arregloDirecciones = resp.data;
        })
    }

}

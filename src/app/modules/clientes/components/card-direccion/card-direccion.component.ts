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
    public direccion: any | undefined;

    @Input('fondo')
    public fondo: boolean = false;


}

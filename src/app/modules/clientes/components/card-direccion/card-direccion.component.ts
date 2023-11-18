import { Component, Input } from '@angular/core';
import { Direccion } from 'src/app/interfaces/direccion.interface';

@Component({
    selector: 'alik-card-direccion',
    templateUrl: './card-direccion.component.html'
})
export class CardDireccionComponent {
    @Input('direccion')
    public direccion: Direccion | undefined;
}

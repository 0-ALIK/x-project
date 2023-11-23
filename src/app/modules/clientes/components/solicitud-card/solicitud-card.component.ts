import { Component, Input } from '@angular/core';
import { Cliente } from 'src/app/interfaces/usuario.inteface';


@Component({
  selector: 'app-solicitud-card',
  templateUrl: './solicitud-card.component.html',
  styleUrls: ['./solicitud-card.component.css']
})
export class SolicitudCardComponent {


    @Input("solicitud")
    public solicitud: any | undefined;

}

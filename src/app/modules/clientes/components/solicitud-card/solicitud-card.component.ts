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


    aceptarSolicitud(id_solicitud: any): void {
        //console.log('Function called with id_solicitud:', id_solicitud);

        console.log('La solicitud fue aceptada con exito: ' + id_solicitud)
        }


    denegarSolicitud(id_solicitud: any): void {
        console.log('La solicitud fue denegada con exito: ' + id_solicitud)
    }
}

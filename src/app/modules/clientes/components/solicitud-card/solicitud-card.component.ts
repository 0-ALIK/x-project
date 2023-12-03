import { Component, Input } from '@angular/core';
import { Cliente } from 'src/app/interfaces/usuario.inteface';
import { SolicitudService } from 'src/app/services/solicitud.service';


@Component({
  selector: 'app-solicitud-card',
  templateUrl: './solicitud-card.component.html',
  styleUrls: ['./solicitud-card.component.css']
})
export class SolicitudCardComponent {


    constructor(
        public solicitudService: SolicitudService,
    ){}

    @Input("solicitud")
    public solicitud: any | undefined;


    aceptarSolicitud(id_solicitud: any): void {
        this.solicitudService.aceptarSolicitud(id_solicitud).subscribe((resp:any)=>{
            console.log('Se acepto la solicitud' + id_solicitud)
        })

        }


    denegarSolicitud(id_solicitud: any): void {
        this.solicitudService.eliminarSolicitud(id_solicitud).subscribe((resp:any)=>{
            console.log('Se elimino correctamente' + id_solicitud)
        })
    }
}

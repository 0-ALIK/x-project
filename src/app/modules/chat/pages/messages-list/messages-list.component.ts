import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent {

    mensaje: string = '';


    public mensajes: any[] = [
        {
            mensaje: 'Hola buen día, tengo un reclamo que hacer',
            remitente: 'cliente'
        },
        {
            mensaje: 'Hola buenos días, sí para servirle',
            remitente: 'admin'
        },
        {
            mensaje: 'Hice un pedido hace tres meses y aun no llega, me sale que en estado enviado peor no lo he recibido',
            remitente: 'cliente'
        },
        {
            mensaje: 'Ok, entiendo, de antemano disculpas por los inconvenientes, ¿Me podria dar su identificacion de compra, fecha exacta, empresa y provincia? por favor',
            remitente: 'admin'
        },
        {
            mensaje: 'Hice un pedido hace tres meses y aun no llega, me sale que en estado enviado peor no lo he recibido',
            remitente: 'cliente'
        },
        {
            mensaje: 'Ok, entiendo, de antemano disculpas por los inconvenientes, ¿Me podria dar su identificacion de compra, fecha exacta, empresa y provincia? por favor',
            remitente: 'admin'
        }
    ];

    enviarMensaje() {
      console.log('Mensaje enviado:', this.mensaje);
    }

    public constructor (
        private router: Router
    ) {}

    @HostListener('document:keydown.escape', ['$event'])
    public onCLickEsc(): void {
        this.router.navigate(['/app/chat']);
    }
}

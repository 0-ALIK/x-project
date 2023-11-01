import { Component } from '@angular/core';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent {
    public mensajes: any[] = [
        {
            mensaje: 'Hola como estas, yo muy bien,Hola como estas, yo muy bien,Hola como estas, yo muy bien,Hola como estas, yo muy bien,Hola como estas, yo muy bien,',
            remitente: 'cliente'
        },
        {
            mensaje: 'Callate,fuck nito',
            remitente: 'admin'
        },
    ];
}

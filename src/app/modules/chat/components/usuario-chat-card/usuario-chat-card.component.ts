import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-usuario-chat-card',
  templateUrl: './usuario-chat-card.component.html',
  styleUrls: ['./usuario-chat-card.component.css']
})

export class UsuarioChatCardComponent {
    @Input('reclamo')
    public reclamo!: any;
    @Input('nombre')
    public nombre!: any;
    @Input('apellido')
    public apellido!: any;
    @Input('descripcion')
    public descripcion!: any;
}

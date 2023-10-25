import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-usuario-chat-card',
  templateUrl: './usuario-chat-card.component.html',
  styleUrls: ['./usuario-chat-card.component.css']
})
export class UsuarioChatCardComponent {
    @Input('reclamo')
    public reclamo!: any;
}

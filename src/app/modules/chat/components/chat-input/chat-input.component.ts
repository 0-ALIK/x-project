import { Component , Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent {
  nuevoMensaje: string = '';

  @Output() mensajeEnviado = new EventEmitter<string>();

  enviarMensaje() {
    if (this.nuevoMensaje.trim() !== '') {
      this.mensajeEnviado.emit(this.nuevoMensaje);
      this.nuevoMensaje = '';
    }
  }
}

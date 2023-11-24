import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-bubble',
  templateUrl: './message-bubble.component.html',
  styleUrls: ['./message-bubble.component.css']
})
export class MessageBubbleComponent {

    @Input('posicion')
    public posicion: string = 'left';

    @Input('mensaje')
    public mensaje!: any;

    ngOnInit() {
        console.log('Posición:', this.posicion);
        console.log('Mensaje:', this.mensaje);
    }

}

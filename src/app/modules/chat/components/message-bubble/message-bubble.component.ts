import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-bubble',
  templateUrl: './message-bubble.component.html',
  styleUrls: ['./message-bubble.component.css']
})
export class MessageBubbleComponent {

    @Input('posicion')
    public pocision: string = 'right';

    @Input('mensaje')
    public mensaje!: any;
}

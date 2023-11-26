import { Component, Input } from '@angular/core';
import { Cliente } from 'src/app/interfaces/usuario.inteface';

@Component({
  selector: 'alik-card-user',
  templateUrl: './card-user.component.html',
  styles: [
  ]
})
export class CardUserComponent {

    @Input('cliente')
    public cliente: Cliente | undefined;

}

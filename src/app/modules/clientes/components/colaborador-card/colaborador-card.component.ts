import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-colaborador-card',
  templateUrl: './colaborador-card.component.html',
  styleUrls: ['./colaborador-card.component.css']
})
export class ColaboradorCardComponent {

    @Input("colaborador")
    public colaborador: any | undefined;
}

import { Component, Input } from '@angular/core';
import { Empresa } from 'src/app/interfaces/usuario.inteface';

@Component({
  selector: 'app-card-empresa',
  templateUrl: './card-empresa.component.html',
  styles: [
  ]
})
export class CardEmpresaComponent {

    @Input('empresa')
    public empresa: Empresa | undefined;

}

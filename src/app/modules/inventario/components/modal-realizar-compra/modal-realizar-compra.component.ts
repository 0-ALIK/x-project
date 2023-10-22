import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-realizar-compra',
  templateUrl: './modal-realizar-compra.component.html',
  styleUrls: ['./modal-realizar-compra.component.css']
})
export class ModalRealizarCompraComponent {
  
  @Input() visibleCompra: boolean = false;

}

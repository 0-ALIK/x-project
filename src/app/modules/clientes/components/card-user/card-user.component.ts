import { Component, Input, OnInit } from '@angular/core';
import { Cliente, Usuario } from 'src/app/interfaces/usuario.inteface';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import { clientes } from 'src/app/interfaces/data';

@Component({
  selector: 'alik-card-user',
  templateUrl: './card-user.component.html',
  styles: [
  ]
})

export class CardUserComponent implements OnInit {
  @Input('cliente')
    
  public cliente: Cliente | undefined;
  private clienteId: number | undefined;
  public usuario: Usuario | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private clientesService: ClientesService
  ) {}

  ngOnInit(): void {
    if (this.clienteId) {
      this.clientesService.getClienteById(this.clienteId).subscribe(
        (clienteData) => {
          this.cliente = clienteData;
          console.log('Detalles del cliente:', this.cliente);
        },
        (error) => {
          console.error('Error al obtener los detalles del cliente', error);
        }
      );
    }
  }
}
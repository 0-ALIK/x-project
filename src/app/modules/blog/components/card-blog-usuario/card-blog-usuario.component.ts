import { Cliente, Usuario } from './../../../../interfaces/usuario.inteface';
import { Component, Input, OnInit } from '@angular/core';
import {SugerenciasService} from 'src/app/services/sugerencias.service' ;

@Component({
  selector: 'app-card-blog-usuario',
  templateUrl: './card-blog-usuario.component.html',
  styleUrls: ['./card-blog-usuario.component.css']
})
export class CardBlogUsuarioComponent implements OnInit {
    @Input('clientes')
    public clientes: Usuario[] | undefined;
    public clientess: any[] = [];
    estrellas: number = 3

    constructor(private sugerenciaService: SugerenciasService) {}

    ngOnInit(): void {
      this.sugerenciaService.getSugerencias().subscribe(data => {
        this.clientess = data.sugerencias;
      });
    }

    itemsPerPage = 15;
    firstItemIndex = 0;

    getClientesForCurrentPage(): any[] {
      const startIndex = this.firstItemIndex;
      const endIndex = startIndex + this.itemsPerPage;
      return this.clientess.slice(startIndex, endIndex);
    }

    onPageChange(event: any) {
      this.firstItemIndex = event.first;
    }
}

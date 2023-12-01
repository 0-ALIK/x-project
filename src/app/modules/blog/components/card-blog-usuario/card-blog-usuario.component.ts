import { Cliente, Usuario } from './../../../../interfaces/usuario.inteface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-blog-usuario',
  templateUrl: './card-blog-usuario.component.html',
  styleUrls: ['./card-blog-usuario.component.css']
})
export class CardBlogUsuarioComponent implements OnInit {
    @Input('clientes')
    public clientes: Usuario[] | undefined;
    public clientess: any[] | undefined
    estrellas: number = 3
    ngOnInit(): void {
        this.cargarClientes();
    }

    cargarClientes(): any[] | undefined{
        this.clientess = [
            {nombre: 'Anita', apellido: 'Valencia', foto: 'img', fecha: '8/8/2023', mensaje: 'Título de la Aplicación: "Travel Explorer Travel Explorer es una aplicación innovadora diseñada para satisfacer las necesidades de los amantes de los viajes. Con una interfaz intuitiva y amigable, la apli', estrellas: 5 }
        ];

        return this.clientess;
    }

}

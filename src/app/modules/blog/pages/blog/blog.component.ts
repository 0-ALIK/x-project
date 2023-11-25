import { Component, ViewEncapsulation } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario.inteface';


@Component({
  selector: 'app-ver-tickets',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class VerBlogComponent {

    public usuario: Usuario[] | undefined;



}

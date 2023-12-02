import { Component, Input, OnInit } from '@angular/core';
import { FileUploadEvent } from 'primeng/fileupload';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Cliente, Empresa } from 'src/app/interfaces/usuario.inteface';

@Component({
  selector: 'app-perfil-card',
  templateUrl: './perfil-card.component.html',
  styleUrls: ['./perfil-card.component.css']
})

export class PerfilCardComponent implements OnInit{


    @Input("cliente")
    public cliente: any | undefined;


    @Input("empresa")
    public empresa: any | undefined;


    public genero: string = "M";

    public uploadedFiles: File[] = [];

    public extenPerminitas: string[] = ['png', 'jpg'];

    ngOnInit(): void {

    }

    public onUpload(event: FileUploadEvent) {

        for(let file of event.files) {

            const partes = file.name.split('.');
            const extension = partes[ partes.length - 1 ].toLowerCase();
            console.log(extension);

            if( this.extenPerminitas.includes( extension ) )
                this.uploadedFiles.push(file);
        }
    }

}



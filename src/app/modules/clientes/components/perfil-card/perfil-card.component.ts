import { Component } from '@angular/core';
import { FileUploadEvent } from 'primeng/fileupload';

@Component({
  selector: 'app-perfil-card',
  templateUrl: './perfil-card.component.html',
  styleUrls: ['./perfil-card.component.css']
})
export class PerfilCardComponent {

    public genero: string = "M";

    public uploadedFiles: File[] = [];

    public extenPerminitas: string[] = ['png', 'jpg'];

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

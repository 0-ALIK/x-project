import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-agregar-marca',
    templateUrl: './agregar-marca.component.html',
    styleUrls: ['./agregar-marca.component.css']
})
export class AgregarMarcaComponent {

    name: string | undefined;
    description: string | undefined;

    uploadedFiles: any[] = [];

    constructor(private messageService: MessageService) {}

    // Este metodo es el que permite cargar los archivos
    onUpload(event:any) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({severity: 'info', summary: 'Archivo Cargado', detail: ''});
        //console.log('Archivos cargados:', this.uploadedFiles);
    }

}

import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

interface uPloadEvent {
    originalEvent: Event;
    files: File[];
}
@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent {
     nombre: string = '';
     categoria: string = '';
     descripcion: string = '';

     uploadedFiles: any[] = [];

     constructor(private messageService: MessageService) {}

     onUpload(event: uPloadEvent) {
            for(let file of event.files) {
                this.uploadedFiles.push(file);
            }

            this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
        }


}

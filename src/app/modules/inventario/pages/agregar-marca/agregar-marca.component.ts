import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

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

    ngOnInit() {}

    onUpload(event:any) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }

}

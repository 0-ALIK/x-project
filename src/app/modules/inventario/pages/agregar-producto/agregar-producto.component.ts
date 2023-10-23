import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
<<<<<<< HEAD
=======

interface Category {
    name: string,
}

interface Types {
    name: string,
}

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}
>>>>>>> a1355660e91cccfd3515a8ebcb64173107e61df4

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


    categories!: Category[];
    types!: Types[];

    selectedCategories!: Category[]
    selectedTypes!: Types[]

    name: string | undefined;
    price_unit: string | undefined;
    stock: string | undefined;
    p_reorden: string | undefined;

    uploadedFiles: any[] = [];

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.categories = [
            {name: 'Bebidas'},
            {name: 'Sodas'},
            {name: 'Aguas'},
            {name: 'Alguito'}
        ];

        this.types = [
            {name: 'Refresco'},
            {name: 'Refresquito'},
            {name: 'No Refresca'},
            {name: 'Mucho refresco'}
        ];
    }

    onUpload(event:any) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }

}

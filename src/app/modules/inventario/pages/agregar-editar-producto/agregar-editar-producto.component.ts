import { Component } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload';
import { DividerModule } from 'primeng/divider';
import { AutoCompleteModule } from 'primeng/autocomplete';

interface FileWithObjectURL extends File {
    objectURL?: string;
}

@Component({
    selector: 'app-agregar-editar-producto',
    templateUrl: './agregar-editar-producto.component.html',
    styleUrls: ['./agregar-editar-producto.component.css']
})
export class AgregarEditarProductoComponent {
    uploadedFiles: any[] = [];
    selectedCategorie: string = '';
    categories: string[] = ['soda', 'jugo', 'vitamina'];
    filteredCategories: string[] = [];


    onUpload(event: { files: File[] }) {
        for (let file of event.files) {
            this.uploadedFiles.push(file);
            let reader = new FileReader();
            reader.onload = (e: any) => {
                (file as FileWithObjectURL).objectURL = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    }

    filterCategory(event: { query: string }) {
        let query = event.query;
        this.filteredCategories = this.categories.filter(category => {
            return category.toLowerCase().indexOf(query.toLowerCase()) == 0;
        });
    }
}

import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-dialog-agregar-categoria',
    templateUrl: './dialog-agregar-categoria.component.html',
    styleUrls: ['./dialog-agregar-categoria.component.css']
})
export class DialogAgregarCategoriaComponent {
    value: string = '';
    loading: boolean = false;

    constructor(private messageService: MessageService) {}

    load() {
        this.loading = true;

        setTimeout(() => {
            if (this.value === "hola") {
                this.showSuccessToast('Categoría agregada');
            } else {
                this.showErrorToast('Categoría no agregada');
            }
            this.loading = false;
            this.value = '';
        }, 2000);
    }

    private showSuccessToast(message: string) {
        this.messageService.add({
            severity: 'success',
            summary: 'Éxito',
            detail: message,
        });
    }

    private showErrorToast(message: string) {
        this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: message,
        });
    }
}

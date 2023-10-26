import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-dialog-agregar-categoria',
    templateUrl: './dialog-agregar-categoria.component.html',
    styleUrls: ['./dialog-agregar-categoria.component.css']
})
export class DialogAgregarCategoriaComponent {

    // Esta variable contiene lo que el usuario ingresa en el input
    value: string = '';

    // Esta variable activa el loading del button
    loading: boolean = false;

    constructor(private messageService: MessageService) {}

    // El metodo load del boton
    load() {
        // El load del boton de activa y Se establece un tiempo de 2 seg de duracion para el loading
        this.loading = true;
        setTimeout(() => {
            // Si lo ingresado por el usuario es "hola" se activa el metodo showSuccessToast con el mensaje
            // Categoria agregada, < Esto solo lo hice para testear el mensaje >
            if (this.value === "hola") {
                this.showSuccessToast('Categoría agregada');
            } else {
                this.showErrorToast('Categoría no agregada');
            }
            //El loading se detiene y se blanquea lo ingresado por el usuario
            this.loading = false;
            this.value = '';
        }, 2000);
    }

    // Método de Success
    private showSuccessToast(message: string) {
        this.messageService.add({
            severity: 'success',
            summary: 'Éxito',
            detail: message,
        });
    }

    // Método de Error
    private showErrorToast(message: string) {
        this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: message,
        });
    }
}

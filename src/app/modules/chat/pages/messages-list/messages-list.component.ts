import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent {
    public mensajes: any[] = [
        {
            mensaje: 'Hola como estas, yo muy bien',
            remitente: 'cliente'
        },
        {
            mensaje: 'Callate',
            remitente: 'admin'
        },
    ];

    public constructor (
        private router: Router
    ) {}

    @HostListener('document:keydown.escape', ['$event'])
    public onCLickEsc(): void {
        this.router.navigate(['/dashboard/chat']);
    }
}

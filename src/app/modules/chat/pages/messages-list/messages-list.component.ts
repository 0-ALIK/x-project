import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ChatService } from '../../chat.service';  

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})

export class MessagesListComponent implements OnInit {

    reclamoId = '1';
    mensajes: any[] = [];
    newMessage: string = '';

    mensaje: string = '';

    constructor(private chatService: ChatService) {}

    ngOnInit(): void {
        this.chatService.getChatMessages(this.reclamoId).subscribe((data) => {
            this.mensajes = data;
        });

        this.chatService.receiveMessages().subscribe({
        next: (payload) => {
            console.log('Received payload:', payload);
            const receivedMessage = payload.message;

            this.mensajes.push({
            reclamo: receivedMessage.reclamo,
            cliente: receivedMessage.cliente,
            mensaje: receivedMessage.mensaje,
            admin: receivedMessage.admin,
            });
        },
        error: (error) => {
            console.error('Error receiving messages:', error);
        },
        complete: () => {
            // Handle completion if needed
        },
        });
    }

    sendMessage() {
        const messageData = {
            reclamo: this.reclamoId,
            cliente: '0',
            mensaje: this.newMessage,
            admin: '1',
        };

            this.chatService.sendMessage(messageData).subscribe(() => {
            this.newMessage = '';
        });
    }
}

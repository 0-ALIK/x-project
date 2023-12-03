import { Component, HostListener, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'; 
import { ChatService } from '../../chat.service';  
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})

export class MessagesListComponent implements OnInit {

    reclamoId:any = '';
    mensajes: any[] = [];
    newMessage: string = '';

    mensaje: string = '';

    constructor(private chatService: ChatService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params.subscribe((params : Params)=>{
            this.reclamoId = params["id"];

            this.chatService.getChatMessages(this.reclamoId).subscribe((data) => {
                this.mensajes = data;
            });
        });

        this.chatService.receiveMessages().subscribe({
        next: (payload) => {
            const receivedMessage = payload.message;
            
            this.mensajes.push({
                reclamo_id: receivedMessage.reclamo,
                cliente_id: receivedMessage.cliente,
                admin_id:   receivedMessage.admin,
                mensaje:    receivedMessage.mensaje
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
            cliente: null,
            mensaje: this.newMessage,
            admin: '1',
        };

        this.chatService.sendMessage(messageData).subscribe(() => {
            this.newMessage = '';
        });
    }
}

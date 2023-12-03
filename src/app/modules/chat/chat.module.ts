import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatsListComponent } from './pages/chats-list/chats-list.component';
import { MessagesListComponent } from './pages/messages-list/messages-list.component';
import { NoOpenChatComponent } from './pages/no-open-chat/no-open-chat.component';
import { UsuarioChatCardComponent } from './components/usuario-chat-card/usuario-chat-card.component';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { MessageBubbleComponent } from './components/message-bubble/message-bubble.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';  // Importa FormsModule

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ChatsListComponent,
    MessagesListComponent,
    NoOpenChatComponent,
    UsuarioChatCardComponent,
    MessageBubbleComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    AvatarModule,
    TagModule,
    HttpClientModule,
    ButtonModule,
    InputTextareaModule,
    FormsModule
  ]
})
export class ChatModule { }

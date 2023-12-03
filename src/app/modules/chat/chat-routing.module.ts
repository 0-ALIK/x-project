import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatsListComponent } from './pages/chats-list/chats-list.component';
import { MessagesListComponent } from './pages/messages-list/messages-list.component';
import { NoOpenChatComponent } from './pages/no-open-chat/no-open-chat.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        component: ChatsListComponent,
        children: [
            {
                path: '',
                component: NoOpenChatComponent
            },
            {
                path: 'reclamo/:id',
                component: MessagesListComponent
            },
            {
                path: '**',
                component: NotFoundComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-chats-list',
  templateUrl: './chats-list.component.html',
  styleUrls: ['./chats-list.component.css']
})
export class ChatsListComponent {
    public reclamos: any[] = [
        {
            id_reclamo: 23
        },
        {
            id_reclamo: 4
        },
        {
            id_reclamo: 53
        }
    ];
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PusherService } from './pusher.service';

@Injectable({
  providedIn: 'root',
})

export class ChatService {

  private apiUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient, private pusherService: PusherService) {}

  getAllChats(): Observable<any>{

    const token = localStorage.getItem('token') || '';
        let header =  new HttpHeaders()
            .set('Type-content', 'aplication/json')
            .set('authorization', 'Bearer '+token)

        return this.http.get(`${this.apiUrl}/api/chat`, {
            headers: header
        });
  }

  getChatMessages(reclamoId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/chat/${reclamoId}`);
  }

  sendMessage(messageData: any): Observable<any> {

    const token = localStorage.getItem('token') || '';
        let header =  new HttpHeaders()
            .set('Type-content', 'aplication/json')
            .set('authorization', 'Bearer '+token)

        return this.http.post(`${this.apiUrl}/api/chat/broadcast`, messageData, {
            headers: header
        });

    // return this.http.post(`${this.apiUrl}/api/chat/broadcast`, messageData);
  }

  receiveMessages(): Observable<any> {
    const channel = this.pusherService.channel('public');

    return new Observable((observer) => {

    channel.bind('chat', (data: any) => {
        observer.next(data);
      });

    });
  }

  openChat(messageData: any): Observable<any> {
    const token = localStorage.getItem('token') || '';
        let header =  new HttpHeaders()
            .set('Type-content', 'aplication/json')
            .set('authorization', 'Bearer '+token)

        return this.http.post(`${this.apiUrl}/api/chat/open`, messageData, {
            headers: header
        });
  }
}
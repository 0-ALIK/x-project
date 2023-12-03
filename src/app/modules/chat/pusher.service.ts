import { Injectable } from '@angular/core';
import Pusher, { Channel } from 'pusher-js';

@Injectable({
  providedIn: 'root',
})

export class PusherService {
  private pusher: Pusher;

  constructor() {
    this.pusher = new Pusher('f4afdf72fc477a42aa21', {
      cluster: 'us2',
    });

    // this.pusher.connection.bind('state_change', (states: any) => {
    //   console.log('Pusher connection state:', states.current);
    // });
  }

  channel(channelName: string): Channel {
    return this.pusher.subscribe(channelName);
  }
}
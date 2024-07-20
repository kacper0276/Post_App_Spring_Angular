import { Injectable } from '@angular/core';
import { Client, IMessage, Stomp } from '@stomp/stompjs';
import { Subject } from 'rxjs';
import SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private stompClient: any;
  private messageSubject: Subject<IMessage> = new Subject<IMessage>();

  connect() {
    const socket = new SockJS('http://localhost:8080/api/v1/ws');
    this.stompClient = Stomp.over(socket);

    this.stompClient.connect({}, (frame: any) => {
      console.log('Connected: ' + frame);
    });
  }

  sendMessage(message: IMessage) {
    this.stompClient.send();
  }
}

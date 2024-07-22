import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client, Stomp } from '@stomp/stompjs';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import SockJS from 'sockjs-client';
import { environment } from '../../../../environments/environment';
import { IMessage } from '../models/message.model';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  apiURL = `${environment.apiUrl}`;
  private stompClient!: Client;
  private messagesSubject: BehaviorSubject<IMessage[]> = new BehaviorSubject<
    IMessage[]
  >([]);

  constructor(private http: HttpClient) {}

  connect() {
    const socket = new SockJS('http://localhost:8080/api/v1/ws');
    this.stompClient = Stomp.over(socket);

    this.stompClient.onConnect = (frame) => {
      this.stompClient.subscribe('/topic/public', (message) => {
        const receivedMessage: IMessage = JSON.parse(message.body);
        this.messagesSubject.next([
          ...this.messagesSubject.getValue(),
          receivedMessage,
        ]);
      });
    };

    this.stompClient.activate();
  }

  sendMessage(message: any) {
    if (this.stompClient && this.stompClient.connected) {
      this.stompClient.publish({
        destination: '/app/chat.sendMessage',
        body: JSON.stringify(message),
      });
    } else {
      console.error('WebSocket client not connected');
    }
  }

  getMessages(): Observable<IMessage[]> {
    return this.messagesSubject.asObservable();
  }

  loadInitialMessages(user1: string, user2: string): void {
    this.http
      .get<IMessage[]>(`${this.apiURL}/message/messages`, {
        params: {
          user1: user1,
          user2: user2,
        },
      })
      .subscribe((messages: any) => {
        this.messagesSubject.next(messages);
      });
  }
}

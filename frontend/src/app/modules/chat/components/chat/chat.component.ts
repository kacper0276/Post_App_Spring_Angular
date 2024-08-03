import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IMessage } from '../../../core/models/message.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/app.reducer';
import { selectAuthUser } from '../../../auth/store/auth.selectors';
import { IUser } from '../../../core/models/auth.model';
import { ChatService } from '../../../core/services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent implements OnInit, OnDestroy {
  messages: IMessage[] = [];
  username!: string;
  private _messageWithUser: string | null = null;
  private subscriptions: Subscription = new Subscription();

  newMessage: IMessage = {
    text: '',
    date: new Date(),
    messageFromUsername: '',
    messageToUsername: '',
  };

  @Input()
  set messageWithUser(value: string | null) {
    this._messageWithUser = value;
    if (this.username && this._messageWithUser) {
      this.loadMessages();
    }
  }
  get messageWithUser(): string | null {
    return this._messageWithUser;
  }

  constructor(
    private store: Store<AppState>,
    private chatService: ChatService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.store.select(selectAuthUser).subscribe((val: IUser | null) => {
        if (val?.username) {
          this.username = val.username;
          if (this._messageWithUser) {
            this.loadMessages();
          }

          this.chatService.getMessages().subscribe((messages: IMessage[]) => {
            this.messages = messages;
            this.sortMessages();
          });
        }
      })
    );

    this.chatService.connect();

    this.subscriptions.add(
      this.chatService.getMessages().subscribe((messages: IMessage[]) => {
        this.messages = messages;
        this.sortMessages();
      })
    );
  }

  private loadMessages(): void {
    if (this.username && this._messageWithUser) {
      this.chatService.loadInitialMessages(
        this.username,
        this._messageWithUser
      );
    }
  }

  sendMessage(): void {
    const { username, _messageWithUser, newMessage } = this;

    if (_messageWithUser && newMessage.text !== '') {
      Object.assign(newMessage, {
        messageFromUsername: username,
        messageToUsername: _messageWithUser,
        date: new Date(),
      });

      this.chatService.sendMessage(newMessage);
      newMessage.text = '';
    }
  }

  private sortMessages(): void {
    this.messages.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.chatService.disconnect();
  }
}

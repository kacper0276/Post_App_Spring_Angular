import { Component, Input, OnInit } from '@angular/core';
import { IMessage } from '../../../core/models/message.model';

@Component({
  selector: 'app-chat-list-component',
  templateUrl: './chat-list-component.component.html',
  styleUrl: './chat-list-component.component.scss',
})
export class ChatListComponentComponent implements OnInit {
  @Input() username!: string;
  @Input() message!: IMessage;
  otherUsername!: string;

  ngOnInit(): void {
    this.otherUsername = this.getOtherUsername();
  }

  getOtherUsername(): string {
    if (this.message.messageFromUsername !== this.username) {
      return this.message.messageFromUsername;
    } else {
      return this.message.messageToUsername;
    }
  }
}

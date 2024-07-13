import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../core/services/chat.service';

@Component({
  selector: 'app-chats-user',
  templateUrl: './chats-user.component.html',
  styleUrl: './chats-user.component.scss',
})
export class ChatsUserComponent implements OnInit {
  actualChat: string | null = null;

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.connect();
  }

  setActualChat(actual: string) {
    this.actualChat = actual;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-chats-user',
  templateUrl: './chats-user.component.html',
  styleUrl: './chats-user.component.scss',
})
export class ChatsUserComponent {
  actualChat: string | null = null;

  setActualChat(actual: string) {
    this.actualChat = actual;
  }
}

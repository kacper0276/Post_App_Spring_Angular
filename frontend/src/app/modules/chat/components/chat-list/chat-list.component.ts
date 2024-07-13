import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.scss',
})
export class ChatListComponent {
  arr: string[] = [
    'test2',
    'bbb',
    'ccc',
    'ddd',
    'aaa',
    'bbb',
    'ccc',
    'ddd',
    'aaa',
    'bbb',
    'ccc',
    'ddd',
    'aaa',
    'bbb',
    'ccc',
    'ddd',
    'aaa',
    'bbb',
    'ccc',
    'ddd',
    'aaa',
    'bbb',
    'ccc',
    'ddd',
  ];

  @Output() actualChat = new EventEmitter<string>();

  setActualChat(actual: string): void {
    this.actualChat.emit(actual);
  }
}

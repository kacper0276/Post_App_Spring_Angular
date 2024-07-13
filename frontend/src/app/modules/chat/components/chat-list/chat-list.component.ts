import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.scss',
})
export class ChatListComponent implements OnInit {
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
  searchControl = new FormControl<string>('');
  @Output() actualChat = new EventEmitter<string>();

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value) => {
        console.log(value);
      });
  }

  setActualChat(actual: string): void {
    this.actualChat.emit(actual);
  }
}

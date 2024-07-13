import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { UserService } from '../../../core/services/user.service';

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

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value) => {
        if (value !== null && value.length > 1) {
          console.log(value);
          this.userService.getUsersIncludeName(value).subscribe({
            next: (val) => {
              console.log(val);
            },
          });
        }
      });
  }

  setActualChat(actual: string): void {
    this.actualChat.emit(actual);
  }

  getFilteredArray(): string[] {
    const value = this.searchControl.value;
    if (value && value !== '') {
      return [value];
    }
    return this.arr;
  }
}

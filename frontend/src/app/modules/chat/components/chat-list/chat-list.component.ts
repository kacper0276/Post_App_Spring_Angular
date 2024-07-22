import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { UserService } from '../../../core/services/user.service';
import { IUser } from '../../../core/models/auth.model';
import { ChatService } from '../../../core/services/chat.service';
import { selectAuthUser } from '../../../auth/store/auth.selectors';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/app.reducer';
import { IMessage } from '../../../core/models/message.model';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.scss',
})
export class ChatListComponent implements OnInit {
  userChats: IMessage[] = [];
  searchControl = new FormControl<string>('');
  username!: string;
  @Output() actualChat = new EventEmitter<string>();

  constructor(
    private userService: UserService,
    private chatService: ChatService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.select(selectAuthUser).subscribe((val: IUser | null) => {
      if (val?.username) {
        this.username = val.username;
        this.chatService.getUsersChatList(val.username).subscribe({
          next: (val) => {
            this.userChats = val;
          },
        });
      }
    });

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

  setActualChat(actual: IMessage): void {
    if (actual.messageFromUsername !== this.username) {
      this.actualChat.emit(actual.messageFromUsername);
    } else {
      this.actualChat.emit(actual.messageToUsername);
    }
  }

  // getFilteredArray(): string[] {
  //   const value = this.searchControl.value;
  //   if (value && value !== '') {
  //     return [value];
  //   }
  //   return this.arr;
  // }
}

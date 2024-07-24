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
  usersList: IUser[] = [];
  searchControl = new FormControl<string>('');
  username!: string;
  @Output() actualChat = new EventEmitter<string>();

  constructor(
    private userService: UserService,
    private chatService: ChatService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.select(selectAuthUser).subscribe((res: IUser | null) => {
      if (res?.username) {
        this.username = res.username;
        this.chatService.getUsersChatList(res.username).subscribe({
          next: (res) => {
            this.userChats = res;
          },
        });
      }
    });

    this.searchControl.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((response) => {
        if (response !== null && response !== '' && response.length > 1) {
          this.userService.getUsersIncludeName(response).subscribe({
            next: (res) => {
              this.usersList = res;
            },
          });
        } else {
          this.usersList = [];
        }
      });
  }

  setActualChat(actual: IMessage | IUser): void {
    if ('messageFromUsername' in actual) {
      if (actual.messageFromUsername !== this.username) {
        this.actualChat.emit(actual.messageFromUsername);
      } else {
        this.actualChat.emit(actual.messageToUsername);
      }
    } else {
      this.actualChat.emit(actual.username);
    }
  }
}

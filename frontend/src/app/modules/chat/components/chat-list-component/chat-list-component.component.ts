import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../../core/models/auth.model';
import { UserProfileService } from '../../../core/services/user-profile.service';
import { IMessage } from '../../../core/models/message.model';

@Component({
  selector: 'app-chat-list-component',
  templateUrl: './chat-list-component.component.html',
  styleUrls: ['./chat-list-component.component.scss'],
})
export class ChatListComponentComponent implements OnInit {
  @Input() username!: string;
  @Input() message?: IMessage | null;
  @Input() user?: IUser | null;
  otherUser!: IUser;

  constructor(private userProfileService: UserProfileService) {}

  ngOnInit(): void {
    if (this.user) {
      this.otherUser = this.user;
    } else if (this.message) {
      this.getUsername();
    }
  }

  async getUsername() {
    try {
      const user: IUser = await this.getOtherUsername();
      this.otherUser = user;
    } catch (error) {
      console.error(error);
    }
  }

  getOtherUsername(): Promise<IUser> {
    let username = '';
    if (this.message) {
      username =
        this.message.messageFromUsername !== this.username
          ? this.message.messageFromUsername
          : this.message.messageToUsername;
    }

    return new Promise((resolve, reject) => {
      this.userProfileService.getUserData(username).subscribe({
        next: (val: IUser) => {
          resolve(val);
        },
        error: (err) => {
          reject(err);
        },
      });
    });
  }
}

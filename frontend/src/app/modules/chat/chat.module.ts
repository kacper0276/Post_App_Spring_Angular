import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatsUserComponent } from './components/chats-user/chats-user.component';
import { ChatComponent } from './components/chat/chat.component';


@NgModule({
  declarations: [
    ChatsUserComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }

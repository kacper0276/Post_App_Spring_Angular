import { NgModule } from '@angular/core';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatsUserComponent } from './components/chats-user/chats-user.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { ChatListComponentComponent } from './components/chat-list-component/chat-list-component.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ChatsUserComponent,
    ChatComponent,
    ChatListComponent,
    ChatListComponentComponent,
    ChatMessageComponent,
  ],
  imports: [SharedModule, ChatRoutingModule, FormsModule],
})
export class ChatModule {}

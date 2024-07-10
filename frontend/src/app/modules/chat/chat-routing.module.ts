import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatsUserComponent } from './components/chats-user/chats-user.component';
import { authGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ChatsUserComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}

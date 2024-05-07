import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSettingsRoutingModule } from './user-settings-routing.module';
import { ChangeUserDataComponent } from './components/change-user-data/change-user-data.component';
import { UserSettingsComponent } from './user-settings.component';
import { EditUserPostsComponent } from './components/edit-user-posts/edit-user-posts.component';

@NgModule({
  declarations: [UserSettingsComponent, ChangeUserDataComponent, EditUserPostsComponent],
  imports: [CommonModule, UserSettingsRoutingModule],
})
export class UserSettingsModule {}

import { NgModule } from '@angular/core';

import { UserSettingsRoutingModule } from './user-settings-routing.module';
import { ChangeUserDataComponent } from './components/change-user-data/change-user-data.component';
import { UserSettingsComponent } from './user-settings.component';
import { EditUserPostsComponent } from './components/edit-user-posts/edit-user-posts.component';
import { SharedModule } from '../shared/shared.module';
import { UserPostComponent } from './components/user-post/user-post.component';
import { UserPostEditFormComponent } from './components/user-post-edit-form/user-post-edit-form.component';
import { AddUserPostComponent } from './components/add-user-post/add-user-post.component';

@NgModule({
  declarations: [
    UserSettingsComponent,
    ChangeUserDataComponent,
    EditUserPostsComponent,
    UserPostComponent,
    UserPostEditFormComponent,
    AddUserPostComponent,
  ],
  imports: [SharedModule, UserSettingsRoutingModule],
})
export class UserSettingsModule {}

import { NgModule } from '@angular/core';

import { UserSettingsRoutingModule } from './user-settings-routing.module';
import { ChangeUserDataComponent } from './components/change-user-data/change-user-data.component';
import { UserSettingsComponent } from './user-settings.component';
import { EditUserPostsComponent } from './components/edit-user-posts/edit-user-posts.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    UserSettingsComponent,
    ChangeUserDataComponent,
    EditUserPostsComponent,
  ],
  imports: [SharedModule, UserSettingsRoutingModule],
})
export class UserSettingsModule {}

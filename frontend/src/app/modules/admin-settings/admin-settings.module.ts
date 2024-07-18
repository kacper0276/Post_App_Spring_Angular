import { NgModule } from '@angular/core';

import { AdminSettingsRoutingModule } from './admin-settings-routing.module';
import { AdminSettingsComponent } from './admin-settings.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { EditPostsAdminComponent } from './components/edit-posts-admin/edit-posts-admin.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AdminSettingsComponent,
    UserSettingsComponent,
    EditPostsAdminComponent,
    UserViewComponent,
  ],
  imports: [SharedModule, AdminSettingsRoutingModule],
})
export class AdminSettingsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSettingsRoutingModule } from './admin-settings-routing.module';
import { AdminSettingsComponent } from './admin-settings.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { EditPostsAdminComponent } from './components/edit-posts-admin/edit-posts-admin.component';


@NgModule({
  declarations: [
    AdminSettingsComponent,
    UserSettingsComponent,
    EditPostsAdminComponent
  ],
  imports: [
    CommonModule,
    AdminSettingsRoutingModule
  ]
})
export class AdminSettingsModule { }

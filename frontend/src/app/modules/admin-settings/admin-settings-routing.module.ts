import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPostsAdminComponent } from './components/edit-posts-admin/edit-posts-admin.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';

const routes: Routes = [
  {
    path: 'ustawienia-uzytkownikow',
    component: UserSettingsComponent,
  },
  {
    path: 'edycja-postow',
    component: EditPostsAdminComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminSettingsRoutingModule {}

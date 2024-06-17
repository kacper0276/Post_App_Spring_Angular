import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPostsAdminComponent } from './components/edit-posts-admin/edit-posts-admin.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { adminGuard } from '../core/guards/admin.guard';

const routes: Routes = [
  {
    path: 'ustawienia-uzytkownikow',
    component: UserSettingsComponent,
    canActivate: [adminGuard],
  },
  {
    path: 'edycja-postow',
    component: EditPostsAdminComponent,
    canActivate: [adminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminSettingsRoutingModule {}

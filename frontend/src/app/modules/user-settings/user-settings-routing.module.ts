import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeUserDataComponent } from './components/change-user-data/change-user-data.component';
import { EditUserPostsComponent } from './components/edit-user-posts/edit-user-posts.component';

const routes: Routes = [
  {
    path: 'ustawienia-uzytkownika',
    component: ChangeUserDataComponent,
  },
  {
    path: 'edycja-postow',
    component: EditUserPostsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserSettingsRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeUserDataComponent } from './components/change-user-data/change-user-data.component';
import { EditUserPostsComponent } from './components/edit-user-posts/edit-user-posts.component';
import { UserPostEditFormComponent } from './components/user-post-edit-form/user-post-edit-form.component';
import { AddUserPostComponent } from './components/add-user-post/add-user-post.component';

const routes: Routes = [
  {
    path: 'ustawienia-uzytkownika',
    component: ChangeUserDataComponent,
  },
  {
    path: 'edycja-postow',
    component: EditUserPostsComponent,
  },
  {
    path: 'edycja-postow/:id',
    component: UserPostEditFormComponent,
  },
  {
    path: 'dodaj-post',
    component: AddUserPostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserSettingsRoutingModule {}

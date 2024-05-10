import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSettingsComponent } from './modules/user-settings/user-settings.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'posty',
    loadChildren: () =>
      import('./modules/posts/posts.module').then((m) => m.PostsModule),
  },
  {
    path: 'ustawienia',
    component: UserSettingsComponent,
    loadChildren: () =>
      import('./modules/user-settings/user-settings.module').then(
        (m) => m.UserSettingsModule
      ),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

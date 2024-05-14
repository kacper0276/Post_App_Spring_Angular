import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSettingsComponent } from './modules/user-settings/user-settings.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { RecoverPasswordComponent } from './modules/auth/components/recover-password/recover-password.component';
import { AdminSettingsComponent } from './modules/admin-settings/admin-settings.component';

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
    path: 'admin',
    component: AdminSettingsComponent,
    loadChildren: () =>
      import('./modules/admin-settings/admin-settings.module').then(
        (m) => m.AdminSettingsModule
      ),
  },
  {
    path: 'logowanie',
    component: LoginComponent,
  },
  {
    path: 'rejestracja',
    component: RegisterComponent,
  },
  {
    path: 'odzyskaj-haslo',
    component: RecoverPasswordComponent,
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}

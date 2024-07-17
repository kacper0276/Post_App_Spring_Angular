import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './components/register/register.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { RouterModule } from '@angular/router';
import { ActivateAccountComponent } from './components/activate-account/activate-account.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RecoverPasswordComponent,
    ActivateAccountComponent,
  ],
  imports: [SharedModule, RouterModule],
})
export class AuthModule {}

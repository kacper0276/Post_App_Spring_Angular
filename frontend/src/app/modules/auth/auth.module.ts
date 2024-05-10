import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './components/register/register.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, RecoverPasswordComponent],
  imports: [SharedModule],
})
export class AuthModule {}

import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginForm } from '../../../core/models/forms.model';
import { FormService } from '../../../core/services/form.service';
import { Title } from '@angular/platform-browser';
import * as AuthActions from '../../store/auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/app.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup<LoginForm> = this.formService.initLoginForm();
  alertMsg: string | null = null;
  @ViewChild('passwordInput') inputPassword!: ElementRef;

  get controls() {
    return this.loginForm.controls;
  }

  constructor(
    private formService: FormService,
    private titleService: Title,
    private store: Store<AppState>
  ) {
    titleService.setTitle('Logowanie');
  }

  onLogin() {
    this.store.dispatch(
      AuthActions.login({ loginData: this.loginForm.getRawValue() })
    );
  }

  changeVisiblePassword(e: Event): void {
    e.preventDefault();

    this.inputPassword.nativeElement.type =
      this.inputPassword.nativeElement.type == 'password' ? 'text' : 'password';
  }
}

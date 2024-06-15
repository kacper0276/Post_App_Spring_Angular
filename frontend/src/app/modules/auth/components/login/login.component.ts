import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginForm } from '../../../core/models/forms.model';
import { FormService } from '../../../core/services/form.service';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../../core/services/auth.service';

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
    private authService: AuthService
  ) {
    titleService.setTitle('Logowanie');
  }

  onLogin() {
    const { username, password } = this.loginForm.getRawValue();
    this.authService.login({ username, password }).subscribe({
      next: (next) => {
        console.log(next);
      },
    });
  }

  changeVisiblePassword(e: Event): void {
    e.preventDefault();

    this.inputPassword.nativeElement.type =
      this.inputPassword.nativeElement.type == 'password' ? 'text' : 'password';
  }
}

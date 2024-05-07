import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginForm } from '../../../core/models/forms.model';
import { FormService } from '../../../core/services/form.service';
import { Title } from '@angular/platform-browser';

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

  constructor(private formService: FormService, private titleService: Title) {
    titleService.setTitle('Logowanie');
  }

  onLogin() {
    console.log(this.loginForm.getRawValue());
  }

  changeVisiblePassword(): void {
    this.inputPassword.nativeElement.type =
      this.inputPassword.nativeElement.type == 'password' ? 'text' : 'password';
  }
}

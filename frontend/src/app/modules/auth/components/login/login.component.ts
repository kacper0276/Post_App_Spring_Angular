import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginForm } from '../../../core/models/forms.model';
import { FormService } from '../../../core/services/form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup<LoginForm> = this.formService.initLoginForm();
  @ViewChild('passwordInput') inputPassword!: ElementRef;

  get controls() {
    return this.loginForm.controls;
  }

  constructor(private formService: FormService) {}

  onLogin() {
    console.log(this.loginForm.getRawValue());
  }

  changeVisiblePassword(): void {
    this.inputPassword.nativeElement.type =
      this.inputPassword.nativeElement.type == 'password' ? 'text' : 'password';
  }
}

import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FormService } from '../../../core/services/form.service';
import { FormGroup } from '@angular/forms';
import { RegisterForm } from '../../../core/models/forms.model';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm: FormGroup<RegisterForm> = this.formService.initRegisterForm();
  alertMsg: string | null = null;

  @ViewChildren('passwordInput') inputPasswords!: QueryList<ElementRef>;

  get controls() {
    return this.registerForm.controls;
  }

  constructor(
    private formService: FormService,
    private authService: AuthService,
    private titleService: Title
  ) {
    titleService.setTitle('Rejestracja');
  }

  onRegister() {
    console.log(this.registerForm.getRawValue());
    const { email, password, username } = this.registerForm.getRawValue();

    this.authService
      .register({ email, username, password })
      .subscribe((val) => console.log(val));
  }

  changeVisiblePassword(e: Event, index: number): void {
    e.preventDefault();
    const passwordInput = this.inputPasswords.toArray()[index].nativeElement;
    passwordInput.type =
      passwordInput.type === 'password' ? 'text' : 'password';
  }
}

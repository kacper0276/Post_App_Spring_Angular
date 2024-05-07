import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormService } from '../../../core/services/form.service';
import { FormGroup } from '@angular/forms';
import { RegisterForm } from '../../../core/models/forms.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm: FormGroup<RegisterForm> = this.formService.initRegisterForm();
  alertMsg: string | null = null;
  @ViewChild('passwordInput') inputPassword!: ElementRef;
  get controls() {
    return this.registerForm.controls;
  }

  constructor(private formService: FormService, private titleService: Title) {
    titleService.setTitle('Rejestracja');
  }

  onRegister() {
    console.log(this.registerForm.getRawValue());
  }

  changeVisiblePassword(): void {
    this.inputPassword.nativeElement.type =
      this.inputPassword.nativeElement.type == 'password' ? 'text' : 'password';
  }
}

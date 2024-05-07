import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { RecoverPasswordForm } from '../../../core/models/forms.model';
import { FormService } from '../../../core/services/form.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.scss',
})
export class RecoverPasswordComponent {
  recoverPasswordForm: FormGroup<RecoverPasswordForm> =
    this.formService.initRecoverPasswordForm();
  @ViewChild('passwordInput') inputPassword!: ElementRef;
  alertMsg: string | null = null;

  get controls() {
    return this.recoverPasswordForm.controls;
  }

  constructor(private titleService: Title, private formService: FormService) {
    titleService.setTitle('Zmień hasło');
  }

  changeVisiblePassword(): void {
    this.inputPassword.nativeElement.type =
      this.inputPassword.nativeElement.type == 'password' ? 'text' : 'password';
  }

  onRecoverPassword() {}
}

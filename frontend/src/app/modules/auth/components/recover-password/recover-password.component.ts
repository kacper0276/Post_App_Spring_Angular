import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.scss',
})
export class RecoverPasswordComponent {
  @ViewChild('passwordInput') inputPassword!: ElementRef;

  changeVisiblePassword(): void {
    this.inputPassword.nativeElement.type =
      this.inputPassword.nativeElement.type == 'password' ? 'text' : 'password';
  }
}

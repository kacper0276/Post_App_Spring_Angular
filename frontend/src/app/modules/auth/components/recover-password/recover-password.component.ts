import { Component, ElementRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.scss',
})
export class RecoverPasswordComponent {
  @ViewChild('passwordInput') inputPassword!: ElementRef;

  constructor(private titleService: Title) {
    titleService.setTitle('Zmień hasło');
  }

  changeVisiblePassword(): void {
    this.inputPassword.nativeElement.type =
      this.inputPassword.nativeElement.type == 'password' ? 'text' : 'password';
  }
}

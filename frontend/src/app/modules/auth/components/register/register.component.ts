import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FormService } from '../../../core/services/form.service';
import { FormGroup } from '@angular/forms';
import { RegisterForm } from '../../../core/models/forms.model';
import { Title } from '@angular/platform-browser';
import * as AuthActions from '../../store/auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/app.reducer';

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
    private store: Store<AppState>,
    private titleService: Title
  ) {
    titleService.setTitle('Rejestracja');
  }

  onRegister() {
    const { email, password, username } = this.registerForm.getRawValue();

    this.store.dispatch(
      AuthActions.register({ registerData: { username, email, password } })
    );
  }

  changeVisiblePassword(e: Event, index: number): void {
    e.preventDefault();
    const passwordInput = this.inputPasswords.toArray()[index].nativeElement;
    passwordInput.type =
      passwordInput.type === 'password' ? 'text' : 'password';
  }
}

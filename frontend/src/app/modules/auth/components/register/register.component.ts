import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FormService } from '../../../core/services/form.service';
import { FormGroup } from '@angular/forms';
import { RegisterForm } from '../../../core/models/forms.model';
import { Title } from '@angular/platform-browser';
import * as AuthActions from '../../store/auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/app.reducer';
import { getStrength } from '../../../core/helpers/progressBar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm: FormGroup<RegisterForm> = this.formService.initRegisterForm();
  alertMsg: string | null = null;

  @ViewChildren('passwordInput') inputPasswords!: QueryList<ElementRef>;
  @ViewChild('bars') bars!: ElementRef;
  @ViewChild('strength') strength!: ElementRef;

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

  handleChange(event: Event) {
    const password = (event?.target as HTMLInputElement).value;
    this.controls.password.markAsTouched();
    this.setPasswordBar(password);
  }

  setPasswordBar(password: string) {
    const strengthText = getStrength(password);

    this.bars.nativeElement.className = '';

    if (strengthText) {
      this.strength.nativeElement.innerText = `${strengthText} hasło`;

      this.bars.nativeElement.classList.add(strengthText);
    } else {
      this.strength.nativeElement.innerText = '';
    }
  }
}

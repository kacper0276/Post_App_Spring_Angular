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

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm: FormGroup<RegisterForm> = this.formService.initRegisterForm();
  alertMsg: string | null = null;

  strengthStatus: { [key: number]: string } = {
    1: 'słabe',
    2: 'średnie',
    3: 'mocne',
  };

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
    this.setBar(password);
  }

  getPasswordStrength(password: string, strengthValue: any) {
    strengthValue.upper = /[A-Z]/.test(password);
    strengthValue.lower = /[a-z]/.test(password);
    strengthValue.numbers = /\d/.test(password);

    let strengthIndicator = 0;

    for (let metric in strengthValue) {
      if (strengthValue[metric] === true) {
        strengthIndicator++;
      }
    }

    return this.strengthStatus[strengthIndicator] ?? '';
  }

  getStrength = (password: string) => {
    let strengthValue = {
      upper: false,
      numbers: false,
      lower: false,
    };

    return this.getPasswordStrength(password, strengthValue);
  };

  setBar(password: string) {
    const strengthText = this.getStrength(password);

    this.bars.nativeElement.className = '';

    if (strengthText) {
      this.strength.nativeElement.innerText = `${strengthText} hasło`;

      this.bars.nativeElement.classList.add(strengthText);
    } else {
      this.strength.nativeElement.innerText = '';
    }
  }
}

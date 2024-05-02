import { Component } from '@angular/core';
import { FormService } from '../../../core/services/form.service';
import { FormGroup } from '@angular/forms';
import { RegisterForm } from '../../../core/models/forms.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm: FormGroup<RegisterForm> = this.formService.initRegisterForm();

  get controls() {
    return this.registerForm.controls;
  }

  constructor(private formService: FormService) {}

  onRegister() {
    console.log(this.registerForm.getRawValue());
  }
}

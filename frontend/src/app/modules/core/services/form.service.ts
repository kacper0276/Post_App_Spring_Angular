import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  ChangeUserDataForm,
  LoginForm,
  RecoverPasswordForm,
  RegisterForm,
} from '../models/forms.model';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor() {}

  initLoginForm(): FormGroup<LoginForm> {
    return new FormGroup({
      email: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50),
        ],
        nonNullable: true,
      }),
      password: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
        nonNullable: true,
      }),
    });
  }

  initRegisterForm(): FormGroup<RegisterForm> {
    return new FormGroup({
      email: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50),
        ],
        nonNullable: true,
      }),
      password: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
        nonNullable: true,
      }),
      repeatedPassword: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
        nonNullable: true,
      }),
    });
  }

  initRecoverPasswordForm(): FormGroup<RecoverPasswordForm> {
    return new FormGroup({
      email: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50),
        ],
        nonNullable: true,
      }),
      password: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
        nonNullable: true,
      }),
      repeatedPassword: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
        nonNullable: true,
      }),
    });
  }

  initChangeUserDataForm(): FormGroup<ChangeUserDataForm> {
    return new FormGroup({
      email: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
        nonNullable: true,
      }),
      firstname: new FormControl('', {
        validators: [Validators.maxLength(100)],
        nonNullable: true,
      }),
      lastname: new FormControl('', {
        validators: [Validators.maxLength(100)],
        nonNullable: true,
      }),
      password: new FormControl('', {
        validators: [Validators.minLength(5), Validators.maxLength(100)],
        nonNullable: true,
      }),
    });
  }
}

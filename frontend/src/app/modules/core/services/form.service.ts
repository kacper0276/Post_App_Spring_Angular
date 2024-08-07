import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  AddComment,
  AddPostForm,
  ChangeUserDataForm,
  EditPostForm,
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
      username: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(5),
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
      username: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(5),
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
      username: new FormControl('', {
        validators: [Validators.maxLength(100), Validators.required],
        nonNullable: true,
      }),
      password: new FormControl('', {
        validators: [Validators.minLength(5), Validators.maxLength(100)],
        nonNullable: true,
      }),
    });
  }

  initPostEditForm(): FormGroup<EditPostForm> {
    return new FormGroup({
      id: new FormControl(0, {
        nonNullable: true,
      }),
      author: new FormControl('', {
        nonNullable: true,
      }),
      content: new FormControl('', {
        validators: [Validators.minLength(10)],
        nonNullable: true,
      }),
      title: new FormControl('', {
        validators: [Validators.minLength(5)],
        nonNullable: true,
      }),
    });
  }

  initAddPostForm(): FormGroup<AddPostForm> {
    return new FormGroup({
      title: new FormControl('', {
        validators: [Validators.minLength(5)],
        nonNullable: true,
      }),
      author: new FormControl('', {
        validators: [Validators.minLength(5)],
        nonNullable: true,
      }),
      content: new FormControl('', {
        validators: [Validators.minLength(5)],
        nonNullable: true,
      }),
    });
  }

  initAddCommentForm(): FormGroup<AddComment> {
    return new FormGroup({
      comment: new FormControl('', {
        validators: [Validators.minLength(1)],
        nonNullable: true,
      }),
    });
  }
}

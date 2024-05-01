import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginForm } from '../models/forms.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  initLoginForm(): FormGroup<LoginForm> {
    return new FormGroup({
      email: new FormControl("", {
        validators: [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50)
        ],
        nonNullable: true
      }),
      password: new FormControl("", {
        validators: [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100)
        ],
        nonNullable: true
      })
    }) 
  }
}

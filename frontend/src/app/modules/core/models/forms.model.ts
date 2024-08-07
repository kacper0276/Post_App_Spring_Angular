import { FormControl } from '@angular/forms';

export interface LoginForm {
  username: FormControl<string>;
  password: FormControl<string>;
}

export interface RegisterForm extends LoginForm {
  email: FormControl<string>;
  repeatedPassword: FormControl<string>;
}

export interface RecoverPasswordForm {
  password: FormControl<string>;
  email: FormControl<string>;
  repeatedPassword: FormControl<string>;
}

export interface ChangeUserDataForm {
  username: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
}

export interface AddPostForm {
  title: FormControl<string>;
  author: FormControl<string>;
  content: FormControl<string>;
}

export interface EditPostForm extends AddPostForm {
  id: FormControl<number>;
}

export interface AddComment {
  comment: FormControl<string>;
}

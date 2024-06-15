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
  firstname: FormControl<string>;
  lastname: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
}

export interface AddPostForm {
  name: FormControl<string>;
  img: FormControl<string>;
  description: FormControl<string>;
}

export interface EditPostForm extends AddPostForm {
  id: FormControl<number>;
  author: FormControl<string>;
}

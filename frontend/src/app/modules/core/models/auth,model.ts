export interface IUser {
  login: string;
  email: string;
  password: string;
}

export class User implements IUser {
  constructor(
    public login: string,
    public email: string,
    public password: string
  ) {}
}

export interface RegisterData {
  email: string;
  login: string;
  password: string;
}

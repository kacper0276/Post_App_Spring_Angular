export interface IUser {
  username: string;
  email: string;
  password: string;
}

export class User implements IUser {
  constructor(
    public username: string,
    public email: string,
    public password: string
  ) {}
}

export interface RegisterData {
  email: string;
  username: string;
  password: string;
}

export interface AuthResponse {
  timestamp: string;
  message: string;
  code: string;
}

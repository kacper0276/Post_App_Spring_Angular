export interface IUser {
  username: string;
  email: string;
  role: string;
}

export class User implements IUser {
  constructor(
    public username: string,
    public email: string,
    public role: string
  ) {}
}

export interface RegisterData {
  email: string;
  username: string;
  password: string;
}

export interface LoginData {
  username: string;
  password: string;
}

export interface AuthResponse {
  timestamp: string;
  message: string;
  code: string;
}

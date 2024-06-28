export interface IUser {
  username: string;
  email: string;
  role: string;
  image: string;
  likes: string[];
}

export class User implements IUser {
  constructor(
    public username: string,
    public email: string,
    public role: string,
    public image: string,
    public likes: string[]
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
}

export interface LoggedInResponse extends Omit<AuthResponse, 'message'> {
  message: boolean;
}

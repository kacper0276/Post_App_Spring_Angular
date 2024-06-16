import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environment/environment';
import {
  AuthResponse,
  IUser,
  LoginData,
  RegisterData,
} from '../models/auth.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiURL = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  register(body: RegisterData): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiURL}/users/register`, body);
  }

  login(body: LoginData): Observable<IUser> {
    return this.http.post<IUser>(`${this.apiURL}/users/login`, body, {
      withCredentials: true,
    });
  }

  logout(): Observable<AuthResponse> {
    return this.http.get<AuthResponse>(`${this.apiURL}/logout`, {
      withCredentials: true,
    });
  }
}

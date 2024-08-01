import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import {
  AuthResponse,
  IUser,
  LoggedInResponse,
  LoginData,
  RegisterData,
} from '../models/auth.model';
import { map, Observable } from 'rxjs';

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
    return this.http.post<IUser>(`${this.apiURL}/users/login`, body);
  }

  refreshToken(): Observable<IUser> {
    return this.http
      .post<IUser>(
        `${this.apiURL}/users/refresh-token`,
        {},
        { withCredentials: true }
      )
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  logout(): Observable<AuthResponse> {
    return this.http.get<AuthResponse>(`${this.apiURL}/users/logout`);
  }

  isLoggedIn(): Observable<LoggedInResponse> {
    return this.http.get<LoggedInResponse>(`${this.apiURL}/users/logged-in`);
  }

  autoLogin(): Observable<IUser> {
    return this.http.get<IUser>(`${this.apiURL}/users/auto-login`);
  }

  activateAccount(id: number): Observable<AuthResponse> {
    const params = new HttpParams().append('id', id);

    return this.http.get<AuthResponse>(`${this.apiURL}/users/activate`, {
      params,
    });
  }
}

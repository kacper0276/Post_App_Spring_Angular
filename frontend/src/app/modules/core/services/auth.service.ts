import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environment/environment';
import { AuthResponse, LoginData, RegisterData } from '../models/auth.model';
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

  login(body: LoginData): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiURL}/users/login`, body);
  }
}

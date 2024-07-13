import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { IUser } from '../models/auth.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  getUsersIncludeName(name: string): Observable<IUser[]> {
    const params = new HttpParams().append('username', name);

    return this.http.get<IUser[]>(`${this.apiUrl}/users/search-users`, {
      params,
    });
  }
}

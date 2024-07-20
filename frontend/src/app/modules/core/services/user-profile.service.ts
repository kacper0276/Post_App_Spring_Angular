import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/auth.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  apiUrl = `${environment.apiUrl}`;

  constructor(private readonly httpClient: HttpClient) {}

  getUserData(username: string): Observable<IUser> {
    return this.httpClient.get<IUser>(
      `${this.apiUrl}/users/get-user-by-username/${username}`
    );
  }
}

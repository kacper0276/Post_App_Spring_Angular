import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  changeUserData(
    id: string,
    email: string,
    username: string,
    password: string,
    profileImage: File | null
  ) {
    const formData = new FormData();
    formData.append('id', id);
    formData.append('email', email);
    formData.append('username', username);
    formData.append('password', password);

    if (profileImage) {
      formData.append('image', profileImage, profileImage.name);
    }

    return this.httpClient.patch(
      `${this.apiUrl}/users/edit-user-data`,
      formData,
      {
        headers: new HttpHeaders({
          enctype: 'multipart/form-data',
        }),
      }
    );
  }
}

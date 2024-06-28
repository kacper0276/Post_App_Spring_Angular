import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../models/post.model';
import { ServerResponse } from '../models/server-response.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  public getAllPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.apiUrl}/posts/`);
  }

  public getSinglePost(id: number): Observable<IPost> {
    return this.http.get<IPost>(`${this.apiUrl}/posts/${id}`);
  }

  public getUserPosts(userID: number): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.apiUrl}/posts/users/${userID}`);
  }

  public addLike(username: string, postId: number): Observable<ServerResponse> {
    const params = new HttpParams()
      .append('username', username)
      .append('postId', postId);

    return this.http.patch<ServerResponse>(
      `${this.apiUrl}/posts/add-like`,
      {},
      {
        params,
        withCredentials: true,
      }
    );
  }
}

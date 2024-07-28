import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../models/post.model';
import { ServerResponse } from '../models/server-response.model';
import { PaginatedResponse } from '../models/paginatedResponse.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  public getAllPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.apiUrl}/posts/all`);
  }

  public getAllPostsPageable(
    page: number,
    size: number = 10
  ): Observable<PaginatedResponse<IPost>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<PaginatedResponse<IPost>>(`${this.apiUrl}/posts/`, {
      params,
    });
  }

  public getSinglePost(id: number): Observable<IPost> {
    return this.http.get<IPost>(`${this.apiUrl}/posts/${id}`);
  }

  public getUserPosts(userID: number): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.apiUrl}/posts/users/${userID}`);
  }

  public getUserPostsByUsername(username: string): Observable<IPost[]> {
    return this.http.get<IPost[]>(
      `${this.apiUrl}/posts/users/username/${username}`
    );
  }

  public uploadPostWithImage(
    title: string,
    content: string,
    author: string,
    image: File
  ): Observable<IPost> {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('author', author);
    formData.append('image', image, image.name);

    return this.http.post<IPost>(`${this.apiUrl}/posts/add`, formData, {
      headers: new HttpHeaders({
        enctype: 'multipart/form-data',
      }),
    });
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
      }
    );
  }

  public addComment(
    comment: string,
    username: string,
    postId: number
  ): Observable<ServerResponse> {
    const params = new HttpParams()
      .append('username', username)
      .append('postId', postId);

    return this.http.patch<ServerResponse>(
      `${this.apiUrl}/posts/add-comment`,
      comment,
      {
        params,
      }
    );
  }
}

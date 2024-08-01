import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from '../models/comment.model';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  public getCommentsInPost(postId: number): Observable<IComment[]> {
    return this.http.get<IComment[]>(`${this.apiUrl}/comments/${postId}`);
  }

  addComment(
    username: string,
    postId: number,
    comment: string
  ): Observable<any> {
    const params = new HttpParams()
      .append('username', username)
      .append('postId', postId);

    return this.http.post<any>(`${this.apiUrl}/comments/add`, comment, {
      params,
    });
  }

  deleteComment(commentId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/comments/delete/${commentId}`);
  }

  editComment(commentId: number, newContent: string): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/comments/edit/${commentId}`, {
      newContent,
    });
  }
}

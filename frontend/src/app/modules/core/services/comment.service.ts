import { HttpClient } from '@angular/common/http';
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
}

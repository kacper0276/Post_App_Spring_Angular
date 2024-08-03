import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPost } from '../../../core/models/post.model';
import { AppState } from '../../../../../store/app.reducer';
import { Store } from '@ngrx/store';
import { selectAuthUser } from '../../../auth/store/auth.selectors';
import { IUser } from '../../../core/models/auth.model';
import { PostService } from '../../../core/services/post.service';
import * as AuthActions from '../../../auth/store/auth.actions';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss',
})
export class PostDetailsComponent implements OnInit {
  @Input() post!: IPost;
  @Output() fetchNewPostData = new EventEmitter<void>();
  showComments: boolean = false;
  userGiveLike: boolean = false;
  username = '';

  constructor(
    private store: Store<AppState>,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.store.select(selectAuthUser).subscribe({
      next: (val: IUser | null) => {
        val != null ? (this.username = val.username) : (this.username = '');

        if (val?.likes?.includes(String(this.post.id))) {
          this.userGiveLike = true;
        }
      },
    });
  }

  fetchNewData() {
    this.fetchNewPostData.emit();
  }

  showCommentFunction(): void {
    this.showComments = true;
  }

  checkUserLike(): void {
    this.store.select(selectAuthUser).subscribe({
      next: (val: IUser | null) => {
        val != null ? (this.username = val.username) : (this.username = '');

        if (val?.likes?.includes(String(this.post.id))) {
          this.userGiveLike = true;
        }
      },
    });
  }

  onAddLike(): void {
    if (this.username != '') {
      this.postService.addLike(this.username, this.post.id).subscribe(() => {
        this.fetchNewData();
        this.store.dispatch(AuthActions.loadUser());
        this.checkUserLike();
      });
    }
  }
}

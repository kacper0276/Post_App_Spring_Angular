import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPost } from '../../../core/models/post.model';
import { PostService } from '../../../core/services/post.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/app.reducer';
import { selectAuthUser } from '../../../auth/store/auth.selectors';
import { IUser } from '../../../core/models/auth.model';
import * as AuthActions from '../../../auth/store/auth.actions';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit {
  @Input() post!: IPost;
  @Output() fetchPosts = new EventEmitter<void>();
  showComments: boolean = false;
  showMoreText: boolean = false;
  showMoreDetailsPost: boolean = false;
  userGiveLike: boolean = false;
  username = '';

  constructor(
    private postService: PostService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.checkUserLike();
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

  toggleShowMoreText(): void {
    this.showMoreText = !this.showMoreText;
  }

  toggleShowMoreDetailsPost(event: Event): void {
    this.showMoreDetailsPost = true;
    event.stopPropagation();
  }

  onOutsideClick() {
    this.showMoreDetailsPost = false;
  }

  onAddLike(): void {
    if (this.username != '') {
      this.postService.addLike(this.username, this.post.id).subscribe(() => {
        this.fetchPostsFun();
        this.store.dispatch(AuthActions.loadUser());
        this.checkUserLike();
      });
    }
  }

  fetchPostsFun() {
    this.fetchPosts.emit();
  }

  showCommentFunction(): void {
    this.showComments = !this.showComments;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../../../core/models/post.model';
import { AppState } from '../../../../../store/app.reducer';
import { Store } from '@ngrx/store';
import { selectAuthUser } from '../../../auth/store/auth.selectors';
import { IUser } from '../../../core/models/auth.model';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss',
})
export class PostDetailsComponent implements OnInit {
  @Input() post!: IPost;
  showComments: boolean = false;
  userGiveLike: boolean = false;
  username = '';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(selectAuthUser).subscribe({
      next: (val: IUser | null) => {
        val != null ? (this.username = val.username) : (this.username = '');

        if (val?.likes.includes(String(this.post.id))) {
          this.userGiveLike = true;
        }
      },
    });
  }

  showCommentFunction(): void {
    this.showComments = true;
  }

  onAddLike(): void {
    console.log('LIKE TEST');
  }
}

import { Component, Input } from '@angular/core';
import { test } from '../../../core/models/test.model';
import { IPost } from '../../../core/models/post.model';
import { PostService } from '../../../core/services/post.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/app.reducer';
import { selectAuthUser } from '../../../auth/store/auth.selectors';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  @Input() post!: IPost;

  showMoreText: boolean = false;
  showMoreDetailsPost: boolean = false;

  constructor(
    private postService: PostService,
    private store: Store<AppState>,
    private notifierService: NotifierService
  ) {}

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
    let username = '';

    this.store.select(selectAuthUser).subscribe({
      next: (val: any) => {
        console.log(val);

        val != null ? (username = val.username) : (username = '');
      },
    });

    if (username != '') {
      this.postService.addLike(username, this.post.id).subscribe({
        next: (val) => console.log(val),
      });
    } else {
      this.notifierService.notify(
        'warning',
        'By polubić post musisz być zalogowany'
      );
    }
  }
}

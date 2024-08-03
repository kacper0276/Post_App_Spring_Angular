import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PostService } from '../../../core/services/post.service';
import { IPost } from '../../../core/models/post.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/app.reducer';
import { selectAuthUser } from '../../../auth/store/auth.selectors';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-edit-user-posts',
  templateUrl: './edit-user-posts.component.html',
  styleUrl: './edit-user-posts.component.scss',
})
export class EditUserPostsComponent implements OnInit {
  posts: IPost[] = [];

  constructor(
    private titleService: Title,
    private postService: PostService,
    private store: Store<AppState>,
    private toastrService: ToastrService,
    private translateService: TranslateService
  ) {
    titleService.setTitle('Edytuj Twoje posty');
  }

  ngOnInit(): void {
    this.store.select(selectAuthUser).subscribe({
      next: (val: any) => {
        this.postService.getUserPostsByUsername(val.username).subscribe({
          next: (res) => (this.posts = res),
          error: () =>
            this.toastrService.error(
              this.translateService.instant('an-error-occurred')
            ),
        });
      },
    });
  }
}

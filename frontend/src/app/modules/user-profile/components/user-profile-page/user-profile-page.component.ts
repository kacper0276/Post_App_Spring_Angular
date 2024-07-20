import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../../core/models/auth.model';
import { UserProfileService } from '../../../core/services/user-profile.service';
import { IPost } from '../../../core/models/post.model';
import { PostService } from '../../../core/services/post.service';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrl: './user-profile-page.component.scss',
})
export class UserProfilePageComponent implements OnInit {
  username!: string | null;
  userData!: IUser | null;
  posts: IPost[] | null = null;

  constructor(
    private route: ActivatedRoute,
    private readonly userProfileService: UserProfileService,
    private readonly postService: PostService
  ) {
    this.username = route.snapshot.paramMap.get('username');
  }

  ngOnInit(): void {
    if (this.username !== null) {
      this.userProfileService.getUserData(this.username).subscribe({
        next: (res: IUser) => {
          this.userData = res;
        },
      });

      this.postService.getUserPostsByUsername(this.username).subscribe({
        next: (res: IPost[]) => {
          console.log(res);

          this.posts = res;
        },
      });
    }
  }
}

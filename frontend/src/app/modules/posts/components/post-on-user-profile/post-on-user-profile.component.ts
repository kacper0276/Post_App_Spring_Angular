import { Component, Input } from '@angular/core';
import { IPost } from '../../../core/models/post.model';

@Component({
  selector: 'app-post-on-user-profile',
  templateUrl: './post-on-user-profile.component.html',
  styleUrl: './post-on-user-profile.component.scss',
})
export class PostOnUserProfileComponent {
  @Input() post!: IPost;
  showMoreText: boolean = false;

  toggleShowMoreText(): void {
    this.showMoreText = !this.showMoreText;
  }
}

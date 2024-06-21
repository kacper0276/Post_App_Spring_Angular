import { Component, Input } from '@angular/core';
import { test } from '../../../core/models/test.model';
import { IPost } from '../../../core/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  @Input() post!: IPost;

  showMoreText: boolean = false;
  showMoreDetailsPost: boolean = false;

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
}

import { Component, Input } from '@angular/core';
import { test } from '../posts/posts.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  @Input() posts!: test;

  showMoreText: boolean = false;
  showMoreDetailsPost: boolean = false;

  toggleShowMoreText(): void {
    this.showMoreText = !this.showMoreText;
  }

  toggleShowMoreDetailsPost(): void {
    this.showMoreDetailsPost = !this.showMoreDetailsPost;
    console.log('CLICK');
  }
}

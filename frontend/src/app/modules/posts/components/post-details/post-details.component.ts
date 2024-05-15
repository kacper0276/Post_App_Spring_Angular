import { Component, Input } from '@angular/core';
import { test } from '../../../core/models/test.model';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss',
})
export class PostDetailsComponent {
  @Input() post!: test;
  showComments: boolean = false;

  showCommentFunction(): void {
    this.showComments = true;
  }
}

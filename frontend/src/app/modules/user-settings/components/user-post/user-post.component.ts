import { Component, Input } from '@angular/core';
import { test } from '../../../posts/components/posts/posts.component';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrl: './user-post.component.scss',
})
export class UserPostComponent {
  @Input() post!: test;
}

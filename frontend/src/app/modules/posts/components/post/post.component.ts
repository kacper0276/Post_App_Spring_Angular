import { Component, Input } from '@angular/core';
import { test } from '../posts/posts.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  @Input() posts!: test;
}

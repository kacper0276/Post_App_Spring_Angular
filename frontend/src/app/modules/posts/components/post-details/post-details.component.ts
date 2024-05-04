import { Component, Input } from '@angular/core';
import { test } from '../posts/posts.component';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss',
})
export class PostDetailsComponent {
  @Input() postData!: test;
}

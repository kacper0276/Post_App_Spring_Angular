import { Component, Input } from '@angular/core';
import { test } from '../../../posts/components/posts/posts.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrl: './user-post.component.scss',
})
export class UserPostComponent {
  @Input() post!: test;

  constructor(private router: Router) {}

  navigateToPostEditForm(): void {
    this.router.navigate([`ustawienia/edycja-postow/${this.post.id}`]);
  }
}

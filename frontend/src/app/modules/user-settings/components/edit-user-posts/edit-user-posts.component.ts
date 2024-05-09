import { Component } from '@angular/core';
import { firstPost } from '../../../test.db';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-user-posts',
  templateUrl: './edit-user-posts.component.html',
  styleUrl: './edit-user-posts.component.scss',
})
export class EditUserPostsComponent {
  posts = firstPost;

  constructor(private titleService: Title) {
    titleService.setTitle('Edytuj Twoje posty');
  }
}

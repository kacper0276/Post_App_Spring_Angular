import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { test } from '../../../posts/components/posts/posts.component';
import { firstPost } from '../../../test.db';

@Component({
  selector: 'app-user-post-edit-form',
  templateUrl: './user-post-edit-form.component.html',
  styleUrl: './user-post-edit-form.component.scss',
})
export class UserPostEditFormComponent implements OnInit {
  id!: number | null;
  post: test | undefined = undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    // this.post = firstPost.find((post) => post.id == this.id);

    console.log(this.post);
  }
}

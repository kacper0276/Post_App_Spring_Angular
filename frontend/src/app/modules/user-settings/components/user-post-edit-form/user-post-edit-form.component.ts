import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstPost } from '../../../test.db';
import { FormService } from '../../../core/services/form.service';
import { FormGroup } from '@angular/forms';
import { EditPostForm } from '../../../core/models/forms.model';
import { test } from '../../../core/models/test.model';
import { IPost } from '../../../core/models/post.model';
import { PostService } from '../../../core/services/post.service';

@Component({
  selector: 'app-user-post-edit-form',
  templateUrl: './user-post-edit-form.component.html',
  styleUrl: './user-post-edit-form.component.scss',
})
export class UserPostEditFormComponent implements OnInit {
  id!: number | null;
  post: IPost | undefined = undefined;
  editPostForm: FormGroup<EditPostForm> = this.formService.initPostEditForm();

  constructor(
    private route: ActivatedRoute,
    private formService: FormService,
    private postService: PostService
  ) {}

  get controls() {
    return this.editPostForm.controls;
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.postService
      .getSinglePost(this.id)
      .subscribe({ next: (value) => (this.post = value) });

    this.editPostForm.setValue({
      id: this.id,
      author: 'Kacper Renkel',
      content: this.post!.content,
      img: this.post!.image,
      title: this.post!.title,
      userId: this.id,
    });

    console.log(this.editPostForm);
  }

  onChangePostData(): void {
    console.log(this.editPostForm);
  }
}

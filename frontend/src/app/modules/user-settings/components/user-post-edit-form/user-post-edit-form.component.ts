import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { test } from '../../../posts/components/posts/posts.component';
import { firstPost } from '../../../test.db';
import { FormService } from '../../../core/services/form.service';
import { FormGroup } from '@angular/forms';
import { EditPostForm } from '../../../core/models/forms.model';

@Component({
  selector: 'app-user-post-edit-form',
  templateUrl: './user-post-edit-form.component.html',
  styleUrl: './user-post-edit-form.component.scss',
})
export class UserPostEditFormComponent implements OnInit {
  id!: number | null;
  post: test | undefined = undefined;
  editPostForm: FormGroup<EditPostForm> = this.formService.initPostEditForm();

  constructor(
    private route: ActivatedRoute,
    private formService: FormService
  ) {}

  get controls() {
    return this.editPostForm.controls;
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.post = firstPost.find((post) => post.id == this.id);

    this.editPostForm.setValue({
      id: this.id,
      author: 'Kacper Renkel',
      description: this.post!.description,
      img: this.post!.img,
      name: this.post!.name,
    });

    console.log(this.editPostForm);
  }

  onChangePostData(): void {
    console.log(this.editPostForm);
  }
}

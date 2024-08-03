import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormService } from '../../../core/services/form.service';
import { FormGroup } from '@angular/forms';
import { EditPostForm } from '../../../core/models/forms.model';
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
  selectedFile: File | null = null;
  fileName: string | null = null;

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

    this.postService.getSinglePost(this.id).subscribe({
      next: (value) => {
        this.post = value;

        if (value && this.id) {
          this.editPostForm.setValue({
            id: this.id,
            author: value!.author,
            content: value!.content,
            title: value!.title,
          });
        }
      },
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.selectedFile = input.files[0];
      this.fileName = input.files[0].name;
    }
  }

  onChangePostData(): void {
    const { author, content, id, title } = this.editPostForm.getRawValue();

    this.postService
      .changePostData(id, author, content, title, this.selectedFile)
      .subscribe();
  }
}

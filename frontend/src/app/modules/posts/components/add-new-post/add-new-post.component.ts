import { Component, OnInit } from '@angular/core';
import { FormService } from '../../../core/services/form.service';
import { FormGroup } from '@angular/forms';
import { AddPostForm } from '../../../core/models/forms.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/app.reducer';
import { selectAuthUser } from '../../../auth/store/auth.selectors';
import { PostService } from '../../../core/services/post.service';

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrl: './add-new-post.component.scss',
})
export class AddNewPostComponent implements OnInit {
  addPostForm: FormGroup<AddPostForm> = this.formService.initAddPostForm();
  selectedFile: File | null = null;

  get controls() {
    return this.addPostForm.controls;
  }

  constructor(
    private formService: FormService,
    private store: Store<AppState>,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.store.select(selectAuthUser).subscribe({
      next: (val: any) => {
        this.controls['author'].setValue(val.username);
      },
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.selectedFile = input.files[0];
    }
  }

  onAddNewPost(): void {
    if (!this.selectedFile) return;

    const { title, content, author } = this.addPostForm.value;

    if (title && content && author) {
      this.postService
        .uploadPostWithImage(title, content, author, this.selectedFile)
        .subscribe({
          next: (response) => {
            console.log('Post created successfully', response);
          },
          error: (error) => {
            console.error('Error creating post', error);
          },
        });
    }
  }
}

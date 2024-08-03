import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormService } from '../../../core/services/form.service';
import { FormGroup } from '@angular/forms';
import { AddPostForm } from '../../../core/models/forms.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/app.reducer';
import { selectAuthUser } from '../../../auth/store/auth.selectors';
import { PostService } from '../../../core/services/post.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-user-post',
  templateUrl: './add-user-post.component.html',
  styleUrl: './add-user-post.component.scss',
})
export class AddUserPostComponent implements OnInit {
  addPostForm: FormGroup<AddPostForm> = this.formService.initAddPostForm();
  selectedFile: File | null = null;

  get controls() {
    return this.addPostForm.controls;
  }

  constructor(
    private titleService: Title,
    private formService: FormService,
    private store: Store<AppState>,
    private postService: PostService,
    private toastrService: ToastrService,
    private translateService: TranslateService
  ) {
    titleService.setTitle('Dodaj artykuł');
  }

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

  onAddPost(): void {
    if (!this.selectedFile) return;

    const { title, content, author } = this.addPostForm.value;

    if (title && content && author) {
      this.postService
        .uploadPostWithImage(title, content, author, this.selectedFile)
        .subscribe({
          next: () => {
            this.toastrService.success(
              this.translateService.instant('succesfully-changed-data')
            );
          },
          error: () => {
            this.toastrService.error(
              this.translateService.instant('an-error-occurred')
            );
          },
        });
    }
  }
}

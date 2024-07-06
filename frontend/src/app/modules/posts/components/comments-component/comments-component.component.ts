import { Component, Input, OnInit } from '@angular/core';
import { FormService } from '../../../core/services/form.service';
import { FormGroup } from '@angular/forms';
import { AddComment } from '../../../core/models/forms.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/app.reducer';
import { selectAuthUser } from '../../../auth/store/auth.selectors';
import { PostService } from '../../../core/services/post.service';
import { IComment } from '../../../core/models/comment.model';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrl: './comments-component.component.scss',
})
export class CommentsComponentComponent implements OnInit {
  addCommentForm: FormGroup<AddComment> = this.formService.initAddCommentForm();
  userLoggedIn!: boolean;
  username!: string;
  @Input() comments!: IComment[];
  @Input() postId!: number;

  get controls() {
    return this.addCommentForm.controls;
  }

  constructor(
    private formService: FormService,
    private postService: PostService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.select(selectAuthUser).subscribe({
      next: (val: any) => {
        this.userLoggedIn = val && val.username && val.email && val.role;
        this.username = val && val.username;
      },
    });
  }

  onAddComment(): void {
    const { comment } = this.addCommentForm.getRawValue();

    this.postService
      .addComment(comment, this.username, this.postId)
      .subscribe((val) => {
        console.log(val);
      });
  }
}

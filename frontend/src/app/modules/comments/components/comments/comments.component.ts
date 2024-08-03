import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormService } from '../../../core/services/form.service';
import { FormGroup } from '@angular/forms';
import { AddComment } from '../../../core/models/forms.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/app.reducer';
import { selectAuthUser } from '../../../auth/store/auth.selectors';
import { PostService } from '../../../core/services/post.service';
import { IComment } from '../../../core/models/comment.model';
import { CommentService } from '../../../core/services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent implements OnInit {
  addCommentForm: FormGroup<AddComment> = this.formService.initAddCommentForm();
  userLoggedIn!: boolean;
  username!: string;
  @Input() comments!: IComment[];
  @Input() postId!: number;
  @Output() fetchNewData = new EventEmitter<void>();

  get controls() {
    return this.addCommentForm.controls;
  }

  constructor(
    private formService: FormService,
    private postService: PostService,
    private commentService: CommentService,
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

  fetchComments(): void {
    this.commentService.getCommentsInPost(this.postId).subscribe((res) => {
      this.comments = res;
    });
  }

  onAddComment(): void {
    const { comment } = this.addCommentForm.getRawValue();

    this.postService
      .addComment(comment, this.username, this.postId)
      .subscribe((val) => {
        this.addCommentForm.reset();
        this.fetchComments();
        this.fetchNewData.emit();
      });
  }
}

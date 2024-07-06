import { NgModule } from '@angular/core';
import { CommentComponent } from './components/comment/comment.component';
import { SharedModule } from '../shared/shared.module';
import { CommentsComponent } from './components/comments/comments.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [CommentComponent, CommentsComponent],
  imports: [SharedModule, RouterLink],
  exports: [CommentComponent, CommentsComponent],
})
export class CommentsModule {}

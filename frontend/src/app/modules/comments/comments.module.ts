import { NgModule } from '@angular/core';
import { CommentComponent } from './components/comment/comment.component';
import { SharedModule } from '../shared/shared.module';
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
  declarations: [CommentComponent, CommentsComponent],
  imports: [SharedModule],
  exports: [CommentComponent, CommentsComponent],
})
export class CommentsModule {}

import { Component, Input } from '@angular/core';
import { IComment } from '../../../core/models/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {
  @Input() comment!: IComment;
}

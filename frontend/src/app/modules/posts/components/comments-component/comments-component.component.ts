import { Component, Input } from '@angular/core';
import { FormService } from '../../../core/services/form.service';
import { FormGroup } from '@angular/forms';
import { AddComment } from '../../../core/models/forms.model';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrl: './comments-component.component.scss',
})
export class CommentsComponentComponent {
  addCommentForm: FormGroup<AddComment> = this.formService.initAddCommentForm();
  @Input() comments!: string[];

  get controls() {
    return this.addCommentForm.controls;
  }

  constructor(private formService: FormService) {}

  onAddComment(): void {
    console.log(this.controls.comment);
  }
}

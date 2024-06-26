import { Component } from '@angular/core';
import { FormService } from '../../../core/services/form.service';
import { FormGroup } from '@angular/forms';
import { AddPostForm } from '../../../core/models/forms.model';

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrl: './add-new-post.component.scss',
})
export class AddNewPostComponent {
  addPostForm: FormGroup<AddPostForm> = this.formService.initAddPostForm();

  get controls() {
    return this.addPostForm.controls;
  }

  constructor(private formService: FormService) {}

  onAddNewPost(): void {
    console.log('TEST');
  }
}

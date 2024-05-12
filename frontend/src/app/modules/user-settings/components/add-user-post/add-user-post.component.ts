import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormService } from '../../../core/services/form.service';
import { FormGroup } from '@angular/forms';
import { AddPostForm } from '../../../core/models/forms.model';

@Component({
  selector: 'app-add-user-post',
  templateUrl: './add-user-post.component.html',
  styleUrl: './add-user-post.component.scss',
})
export class AddUserPostComponent {
  addPostForm: FormGroup<AddPostForm> = this.formService.initAddPostForm();

  constructor(private titleService: Title, private formService: FormService) {
    titleService.setTitle('Dodaj artykuł');
  }

  get controls() {
    return this.addPostForm.controls;
  }

  onAddPost(): void {
    console.log(this.addPostForm);
  }
}

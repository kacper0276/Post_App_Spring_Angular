import { Component, OnInit } from '@angular/core';
import { FormService } from '../../../core/services/form.service';
import { FormGroup } from '@angular/forms';
import { AddPostForm } from '../../../core/models/forms.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/app.reducer';
import { selectAuthUser } from '../../../auth/store/auth.selectors';

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrl: './add-new-post.component.scss',
})
export class AddNewPostComponent implements OnInit {
  addPostForm: FormGroup<AddPostForm> = this.formService.initAddPostForm();

  get controls() {
    return this.addPostForm.controls;
  }

  constructor(
    private formService: FormService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.select(selectAuthUser).subscribe({
      next: (val: any) => {
        this.controls['author'].setValue(val.username);
      },
    });
  }

  onAddNewPost(): void {
    console.log('TEST');
  }
}

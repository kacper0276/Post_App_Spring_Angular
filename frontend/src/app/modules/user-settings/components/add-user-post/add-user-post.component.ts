import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormService } from '../../../core/services/form.service';
import { FormGroup } from '@angular/forms';
import { AddPostForm } from '../../../core/models/forms.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/app.reducer';
import { selectAuthUser } from '../../../auth/store/auth.selectors';

@Component({
  selector: 'app-add-user-post',
  templateUrl: './add-user-post.component.html',
  styleUrl: './add-user-post.component.scss',
})
export class AddUserPostComponent implements OnInit {
  addPostForm: FormGroup<AddPostForm> = this.formService.initAddPostForm();

  get controls() {
    return this.addPostForm.controls;
  }

  constructor(
    private titleService: Title,
    private formService: FormService,
    private store: Store<AppState>
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

  onAddPost(): void {
    console.log(this.addPostForm);
  }
}

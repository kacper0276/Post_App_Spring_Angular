import { Component, OnInit } from '@angular/core';
import { FormService } from '../../../core/services/form.service';
import { FormGroup } from '@angular/forms';
import { ChangeUserDataForm } from '../../../core/models/forms.model';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/app.reducer';
import { selectAuthUser } from '../../../auth/store/auth.selectors';

@Component({
  selector: 'app-change-user-data',
  templateUrl: './change-user-data.component.html',
  styleUrl: './change-user-data.component.scss',
})
export class ChangeUserDataComponent implements OnInit {
  changeUserDataForm: FormGroup<ChangeUserDataForm> =
    this.formService.initChangeUserDataForm();

  selectedFile: File | null = null;
  fileName = '';

  get controls() {
    return this.changeUserDataForm.controls;
  }

  constructor(
    private formService: FormService,
    titleService: Title,
    private store: Store<AppState>
  ) {
    titleService.setTitle('Zmień swoje dane');
  }

  ngOnInit(): void {
    this.store.select(selectAuthUser).subscribe({
      next: (val: any) => {
        this.controls['username'].setValue(val.username);
        this.controls['email'].setValue(val.email);
        this.controls['password'].setValue('');
      },
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;

    if (this.selectedFile) {
      this.fileName = this.selectedFile.name;
    }
  }

  uploadImage() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile);

      console.log(this.selectedFile);
    }
  }

  onChangeData() {
    if (this.selectedFile) {
      this.uploadImage();
    }

    console.log(this.changeUserDataForm);
  }
}

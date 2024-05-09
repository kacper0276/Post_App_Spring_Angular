import { Component } from '@angular/core';
import { FormService } from '../../../core/services/form.service';
import { FormGroup } from '@angular/forms';
import { ChangeUserDataForm } from '../../../core/models/forms.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-change-user-data',
  templateUrl: './change-user-data.component.html',
  styleUrl: './change-user-data.component.scss',
})
export class ChangeUserDataComponent {
  changeUserDataForm: FormGroup<ChangeUserDataForm> =
    this.formService.initChangeUserDataForm();

  selectedFile: File | null = null;
  fileName = '';

  constructor(private formService: FormService, titleService: Title) {
    titleService.setTitle('Zmień swoje dane');
  }

  get controls() {
    return this.changeUserDataForm.controls;
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

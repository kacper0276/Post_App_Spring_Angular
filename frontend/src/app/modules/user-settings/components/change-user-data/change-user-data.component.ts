import { Component } from '@angular/core';
import { FormService } from '../../../core/services/form.service';
import { FormGroup } from '@angular/forms';
import { ChangeUserDataForm } from '../../../core/models/forms.model';

@Component({
  selector: 'app-change-user-data',
  templateUrl: './change-user-data.component.html',
  styleUrl: './change-user-data.component.scss',
})
export class ChangeUserDataComponent {
  changeUserDataForm: FormGroup<ChangeUserDataForm> =
    this.formService.initChangeUserDataForm();
  constructor(private formService: FormService) {}

  get controls() {
    return this.changeUserDataForm.controls;
  }
}

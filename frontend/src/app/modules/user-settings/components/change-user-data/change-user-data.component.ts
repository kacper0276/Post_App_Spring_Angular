import { Component, OnInit } from '@angular/core';
import { FormService } from '../../../core/services/form.service';
import { FormGroup } from '@angular/forms';
import { ChangeUserDataForm } from '../../../core/models/forms.model';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/app.reducer';
import { selectAuthUser } from '../../../auth/store/auth.selectors';
import { UserProfileService } from '../../../core/services/user-profile.service';
import { ToastrService } from 'ngx-toastr';

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
  id = 0;

  constructor(
    private formService: FormService,
    private userProfileService: UserProfileService,
    titleService: Title,
    private store: Store<AppState>,
    private toastrService: ToastrService
  ) {
    titleService.setTitle('Zmień swoje dane');
  }

  ngOnInit(): void {
    this.store.select(selectAuthUser).subscribe({
      next: (val: any) => {
        this.id = val.id;
        this.controls['username'].setValue(val.username);
        this.controls['email'].setValue(val.email);
        this.controls['password'].setValue('');
      },
    });
  }

  get controls() {
    return this.changeUserDataForm.controls;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.selectedFile = input.files[0];
    }
  }

  onChangeData() {
    const { email, password, username } = this.changeUserDataForm.getRawValue();

    this.userProfileService
      .changeUserData(
        this.id.toString(),
        email,
        username,
        password,
        this.selectedFile
      )
      .subscribe({
        next: () => this.toastrService.success('succesfully-changed-data'),
        error: () => this.toastrService.error('an-error-occurred'),
      });
  }
}

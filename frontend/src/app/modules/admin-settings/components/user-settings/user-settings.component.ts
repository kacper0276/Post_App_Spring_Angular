import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../core/models/auth.model';
import { UserService } from '../../../core/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrl: './user-settings.component.scss',
})
export class UserSettingsComponent implements OnInit {
  usersList: IUser[] = [];

  constructor(
    private userService: UserService,
    private toastrService: ToastrService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (res: IUser[]) => (this.usersList = res),
      error: () =>
        this.toastrService.error(
          this.translateService.instant('an-error-occurred')
        ),
    });
  }
}

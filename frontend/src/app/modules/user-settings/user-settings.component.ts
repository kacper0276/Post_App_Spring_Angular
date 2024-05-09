import { Component } from '@angular/core';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrl: './user-settings.component.scss',
})
export class UserSettingsComponent {
  menuExtend: boolean = false;

  changeMenuVisible(): void {
    this.menuExtend = !this.menuExtend;
  }
}

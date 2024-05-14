import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrl: './admin-settings.component.scss',
})
export class AdminSettingsComponent {
  menuExtend: boolean = false;

  changeMenuVisible(): void {
    this.menuExtend = !this.menuExtend;
  }
}

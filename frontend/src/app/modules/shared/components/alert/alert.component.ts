import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
})
export class AlertComponent {
  @Input() message!: string;
  @Input() typeAlert!: string;

  changeTypeAlertToClassname(): string {
    switch (this.typeAlert) {
      case 'info':
        return 'info-class';
      case 'danger':
        return 'danger-class';
      default:
        return 'info-class';
    }
  }
}

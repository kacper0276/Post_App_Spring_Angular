import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SliceTextPipe } from './pipes/slice-text.pipe';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { NotificationComponent } from './components/notification/notification.component';
import { AlertComponent } from './components/alert/alert.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    SliceTextPipe,
    ClickOutsideDirective,
    NotificationComponent,
    AlertComponent,
    ErrorComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    SliceTextPipe,
    ClickOutsideDirective,
    AlertComponent,
    NotificationComponent,
    ErrorComponent,
  ],
})
export class SharedModule {}

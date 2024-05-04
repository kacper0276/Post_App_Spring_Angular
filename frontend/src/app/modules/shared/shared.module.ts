import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SliceTextPipe } from './pipes/slice-text.pipe';
import { ClickOutsideDirective } from './directives/click-outside.directive';

@NgModule({
  declarations: [SliceTextPipe, ClickOutsideDirective],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    SliceTextPipe,
    ClickOutsideDirective,
  ],
})
export class SharedModule {}

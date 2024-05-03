import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SliceTextPipe } from './pipes/slice-text.pipe';

@NgModule({
  declarations: [SliceTextPipe],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CommonModule, ReactiveFormsModule, SliceTextPipe],
})
export class SharedModule {}

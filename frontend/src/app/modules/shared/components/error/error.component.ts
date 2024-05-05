import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
})
export class ErrorComponent {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const content = this.elementRef.nativeElement.textContent.trim();
    console.log(content);
  }
}

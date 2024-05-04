import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrl: './comments-component.component.scss',
})
export class CommentsComponentComponent {
  @Input() comments!: string[];
}

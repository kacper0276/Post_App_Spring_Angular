import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  @Input() posts!: {
    name: string;
    img: string;
    description: string;
    like: number;
    comments: string[];
    author: string;
  };
}

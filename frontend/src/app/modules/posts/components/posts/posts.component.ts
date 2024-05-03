import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent {
  firstPost = [
    {
      name: 'Nazwa',
      img: 'zdjecie',
      description: 'lorem',
      like: 15,
      comments: ['Pierwszwy', 'Drugi'],
      author: 'Kacper Renkel',
    },
    {
      name: 'Nazwa #2',
      img: 'zdjecie',
      description: 'lorem ipsum',
      like: 300,
      comments: ['Pierwszwy', 'Drugi', 'ósmy', 'komentarz'],
      author: 'Kacper Renkel',
    },
  ];
}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

export interface test {
  name: string;
  img: string;
  description: string;
  like: number;
  comments: string[];
  author: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent implements OnInit {
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
    {
      name: 'Nazwa #3',
      img: 'zdjecie',
      description: 'lorem ipsum',
      like: 300,
      comments: [],
      author: 'Kacper Renkel',
    },
    {
      name: 'Nazwa #4',
      img: 'zdjecie',
      description: 'lorem ipsum',
      like: 300,
      comments: [],
      author: 'Kacper Renkel',
    },
    {
      name: 'Nazwa #4',
      img: 'zdjecie',
      description: 'lorem ipsum',
      like: 300,
      comments: [],
      author: 'Kacper Renkel',
    },
    {
      name: 'Nazwa #4',
      img: 'zdjecie',
      description: 'lorem ipsum',
      like: 300,
      comments: [],
      author: 'Kacper Renkel',
    },
    {
      name: 'Nazwa #4',
      img: 'zdjecie',
      description: 'lorem ipsum',
      like: 300,
      comments: [],
      author: 'Kacper Renkel',
    },
    {
      name: 'Nazwa #4',
      img: 'zdjecie',
      description: 'lorem ipsum',
      like: 300,
      comments: [],
      author: 'Kacper Renkel',
    },
    {
      name: 'Nazwa #4',
      img: 'zdjecie',
      description: 'lorem ipsum',
      like: 300,
      comments: [],
      author: 'Kacper Renkel',
    },
    {
      name: 'Nazwa #4',
      img: 'zdjecie',
      description: 'lorem ipsum',
      like: 300,
      comments: [],
      author: 'Kacper Renkel',
    },
    {
      name: 'Nazwa #4',
      img: 'zdjecie',
      description: 'lorem ipsum',
      like: 300,
      comments: [],
      author: 'Kacper Renkel',
    },
    {
      name: 'Nazwa #4',
      img: 'zdjecie',
      description: 'lorem ipsum',
      like: 300,
      comments: [],
      author: 'Kacper Renkel',
    },
    {
      name: 'Nazwa #4',
      img: 'zdjecie',
      description: 'lorem ipsum',
      like: 300,
      comments: [],
      author: 'Kacper Renkel',
    },
    {
      name: 'Nazwa #4',
      img: 'zdjecie',
      description: 'lorem ipsum',
      like: 300,
      comments: [],
      author: 'Kacper Renkel',
    },
    {
      name: 'Nazwa #4',
      img: 'zdjecie',
      description: 'lorem ipsum',
      like: 300,
      comments: [],
      author: 'Kacper Renkel',
    },
  ];

  searchControl = new FormControl<string>('');
  sortControl = new FormControl<string>('');
  orderControl = new FormControl<string>('');

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value) => {
        console.log(value);
        console.log(this.sortControl.getRawValue());
        console.log(this.orderControl.getRawValue());
      });
  }
}

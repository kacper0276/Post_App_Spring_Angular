import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
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
      description:
        'Lorem Ipsum to po prostu fikcyjny tekst branży poligraficznej i składu. Lorem Ipsum jest standardowym fikcyjnym tekstem stosowanym w branży od XVI wieku, kiedy nieznany drukarz wziął kuchenkę z czcionkami i przemieszał ją, aby stworzyć wzornik czcionek. Przetrwał nie tylko pięć wieków, ale także skok w stronę składu elektronicznego, pozostając w zasadzie niezmieniony. Został spopularyzowany w latach sześćdziesiątych XX wieku wraz z wydaniem arkuszy Letraset zawierających fragmenty Lorem Ipsum, a ostatnio wraz z oprogramowaniem do publikowania na komputerach stacjonarnych, takim jak Aldus PageMaker, zawierającym wersje Lorem Ipsum.',
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

  constructor(private titleService: Title) {
    titleService.setTitle('Lista produktów');
  }

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

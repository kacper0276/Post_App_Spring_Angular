import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { firstPost } from '../../../test.db';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent implements OnInit {
  firstPost = firstPost;

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

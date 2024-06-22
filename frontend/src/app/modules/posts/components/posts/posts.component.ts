import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { firstPost } from '../../../test.db';
import { IPost } from '../../../core/models/post.model';
import { PostService } from '../../../core/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent implements OnInit {
  firstPost = firstPost;
  posts: IPost[] = [];

  constructor(private titleService: Title, private postService: PostService) {
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

    this.postService.getAllPosts().subscribe({
      next: (value) => {
        this.posts = [...value];
      },
    });
  }
}

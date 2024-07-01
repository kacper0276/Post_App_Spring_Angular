import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { IPost } from '../../../core/models/post.model';
import { PostService } from '../../../core/services/post.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/app.reducer';
import { selectAuthUser } from '../../../auth/store/auth.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent implements OnInit {
  posts: IPost[] = [];
  userLoggedIn!: boolean;

  constructor(
    private titleService: Title,
    private postService: PostService,
    private store: Store<AppState>,
    private router: Router
  ) {
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

    this.store.select(selectAuthUser).subscribe({
      next: (val: any) => {
        this.userLoggedIn = val && val.username && val.email && val.role;
      },
    });
  }

  onRedirectToAddPost(): void {
    this.router.navigate(['posty/dodaj-post']);
  }
}

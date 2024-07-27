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
import { PaginatedResponse } from '../../../core/models/paginatedResponse.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent implements OnInit {
  posts: IPost[] = [];
  userLoggedIn!: boolean;
  currentPage = 0;
  pageSize = 10;
  totalPages = 0;

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

    this.loadPosts();

    this.store.select(selectAuthUser).subscribe({
      next: (val: any) => {
        this.userLoggedIn = val && val.username && val.email && val.role;
      },
    });
  }

  loadPosts(): void {
    this.postService
      .getAllPostsPageable(this.currentPage, this.pageSize)
      .subscribe((data: PaginatedResponse<IPost>) => {
        this.posts = data.content;
        this.currentPage = data.currentPage;
        this.totalPages = data.totalPages;
      });
  }

  nextPage(): void {
    this.currentPage++;
    this.loadPosts();
  }

  prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadPosts();
    }
  }

  onRedirectToAddPost(): void {
    this.router.navigate(['posty/dodaj-post']);
  }
}

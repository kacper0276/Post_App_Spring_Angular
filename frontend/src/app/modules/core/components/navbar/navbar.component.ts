import { Component, OnInit, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/app.reducer';
import { selectAuthUser } from '../../../auth/store/auth.selectors';
import * as AuthActions from '../../../auth/store/auth.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  userLoggedIn!: boolean;
  adminLoggedIn!: boolean;

  constructor(private renderer: Renderer2, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(selectAuthUser).subscribe({
      next: (val: any) => {
        this.userLoggedIn = val && val.username && val.email && val.role;
        this.adminLoggedIn =
          val && val.username && val.email && val.role === 'Administrator';
      },
    });

    window.addEventListener('scroll', this.onScroll, true);
  }

  onScroll($event: Event) {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop || 0;
    const navbarElement = document.querySelector('.navigation-list');

    if (navbarElement) {
      if (scrollTop > 400) {
        navbarElement.classList.add('scroll');
      } else {
        navbarElement.classList.remove('scroll');
      }
    }
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
  }
}

import { Component, OnInit, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/app.reducer';
import { selectAuthUser } from '../../../auth/store/auth.selectors';
import * as AuthActions from '../../../auth/store/auth.actions';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  linkToUserProfile!: string;
  userLoggedIn!: boolean;
  adminLoggedIn!: boolean;
  isMenuOpen = false;

  constructor(
    private renderer: Renderer2,
    private store: Store<AppState>,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.initialize();
    window.addEventListener('scroll', this.onScroll, true);
  }

  initialize(): void {
    this.store.select(selectAuthUser).subscribe({
      next: (val: any) => {
        if (val) {
          this.linkToUserProfile = `profil-uzytkownika/${val.username}`;
          this.userLoggedIn = val && val.username && val.email && val.role;
          this.adminLoggedIn =
            val && val.username && val.email && val.role === 'ADMINISTRATOR';
        } else {
          this.linkToUserProfile = '';
          this.userLoggedIn = false;
          this.adminLoggedIn = false;
        }
      },
    });
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

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
    this.initialize();
  }
}

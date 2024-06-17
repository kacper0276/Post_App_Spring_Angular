import { Component, OnInit, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/app.reducer';
import { Observable, take } from 'rxjs';
import { User } from '../../models/auth.model';
import { selectAuthUser } from '../../../auth/store/auth.selectors';
import * as AuthActions from '../../../auth/store/auth.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  user$: Observable<User | null> = this.store.select(selectAuthUser);

  constructor(private renderer: Renderer2, private store: Store<AppState>) {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll, true);
  }

  onScroll($event: Event) {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop || 0;
    const navbarElement = document.querySelector('.navigation-list');

    console.log('scrolling');
    if (navbarElement) {
      console.log(scrollTop);

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

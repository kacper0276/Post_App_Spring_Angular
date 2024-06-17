import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/app.reducer';
import { catchError, map, of, switchMap, take } from 'rxjs';
import { selectAuthUser } from '../../auth/store/auth.selectors';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const store = inject(Store<AppState>);

  return authService.isLoggedIn().pipe(
    take(1),
    switchMap((resp) => {
      const isLoggedIn = resp.message;

      if (isLoggedIn) {
        return store.select(selectAuthUser).pipe(
          map((user) => {
            if (user && user.role === 'Administrator') {
              return true;
            }

            return false;
          })
        );
      }

      return of(false);
    }),
    catchError((err) => {
      return of(false);
    })
  );
};

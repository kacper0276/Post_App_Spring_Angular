import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { catchError, map, of, switchMap } from 'rxjs';
import { IUser } from '../../core/models/auth.model';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap((action) => {
        return this.authService.login(action.loginData).pipe(
          map((response) => {
            if (this.isValidUser(response)) {
              const user = response as IUser;

              this.router.navigate(['/']);

              return AuthActions.loginSuccess({ user: { ...user } });
            } else {
              throw new Error('Błąd przy logowaniu!');
            }
          }),
          catchError((err) => {
            return of(AuthActions.loginFailure({ error: err.message }));
          })
        );
      })
    )
  );

  autoLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.autoLogin),
      switchMap(() => {
        return this.authService.autoLogin().pipe(
          map((user) => {
            return AuthActions.autoLoginSuccess({ user: { ...user } });
          }),
          catchError((err) => of(AuthActions.autoLoginFailure()))
        );
      })
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      switchMap(() => {
        return this.authService.logout().pipe(
          map(() => {
            this.router.navigate(['/logowanie']);
            return AuthActions.logoutSuccess();
          }),
          catchError((err) => {
            return of(AuthActions.logoutFailure());
          })
        );
      })
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      switchMap((action) => {
        return this.authService.register(action.registerData).pipe(
          map((user) => {
            this.router.navigate(['/logowanie']);

            return AuthActions.registerSuccess();
          }),
          catchError((err) => {
            return of(AuthActions.loginFailure({ error: err }));
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  isValidUser(response: any): response is IUser {
    return (
      response &&
      typeof response.email === 'string' &&
      typeof response.username === 'string'
    );
  }
}

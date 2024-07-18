import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { catchError, map, of, switchMap } from 'rxjs';
import { IUser } from '../../core/models/auth.model';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private translate: TranslateService
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap((action) => {
        return this.authService.login(action.loginData).pipe(
          map((response) => {
            if (this.isValidUser(response)) {
              const user = response as IUser;
              this.toastr.success(
                '',
                this.translate.instant('successfully-logged-in'),
                {
                  timeOut: 2000,
                }
              );

              this.router.navigate(['/']);

              return AuthActions.loginSuccess({ user: { ...user } });
            } else {
              this.toastr.error(
                '',
                this.translate.instant('an-error-occurred'),
                {
                  timeOut: 2000,
                }
              );

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
            this.toastr.success(
              '',
              this.translate.instant('successfully-logged-out'),
              {
                timeOut: 2000,
              }
            );

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
            this.toastr.success(
              '',
              this.translate.instant('successfully-registered'),
              {
                timeOut: 2000,
              }
            );

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

  isValidUser(response: any): response is IUser {
    return (
      response &&
      typeof response.email === 'string' &&
      typeof response.username === 'string'
    );
  }
}

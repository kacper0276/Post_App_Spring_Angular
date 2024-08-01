import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, Observable, switchMap, throwError, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/app.reducer';
import * as AuthActions from '../../auth/store/auth.actions';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const store = inject(Store<AppState>);

  let hasRefreshed = false;

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401 || error.status === 403) {
        if (hasRefreshed) {
          store.dispatch(AuthActions.logout());
          return throwError(error);
        }

        hasRefreshed = true;

        return handleAuthError(req, next, authService).pipe(
          catchError((err) => {
            store.dispatch(AuthActions.logout());
            return throwError(err);
          })
        );
      }
      return throwError(error);
    })
  );
};

function handleAuthError(
  req: HttpRequest<any>,
  next: HttpHandlerFn,
  authService: AuthService
): Observable<HttpEvent<any>> {
  return authService.refreshToken().pipe(
    switchMap(() => {
      return next(req);
    })
  );
}

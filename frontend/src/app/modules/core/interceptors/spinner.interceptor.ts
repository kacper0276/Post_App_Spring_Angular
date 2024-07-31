import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';
import { finalize, Observable } from 'rxjs';

export const spinnerInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const spinnerService = inject(SpinnerService);

  spinnerService.showSpinner();

  return next(req).pipe(finalize(() => spinnerService.hideSpinner()));
};

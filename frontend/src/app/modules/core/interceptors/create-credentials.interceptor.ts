import { HttpInterceptorFn } from '@angular/common/http';

export const createCredentialsInterceptor: HttpInterceptorFn = (req, next) => {
  const modifiedReq = req.clone({
    withCredentials: true,
  });

  return next(modifiedReq);
};

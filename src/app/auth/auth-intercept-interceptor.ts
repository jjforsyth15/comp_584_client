import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};

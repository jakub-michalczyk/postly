import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

const API_BASE = 'https://jsonplaceholder.typicode.com';

export const baseUrlInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  if (req.url.startsWith('http')) {
    return next(req);
  }

  const newReq = req.clone({
    url: `${API_BASE}${req.url.startsWith('/') ? '' : '/'}${req.url}`,
  });

  return next(newReq);
};

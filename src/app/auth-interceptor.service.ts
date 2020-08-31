import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * This class is a middleware that applies the user token for any request
 */
@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const user = JSON.parse(localStorage.getItem('user'));
    let request = req;
    if (user) {
      request = req.clone({
        setHeaders: {
          Authorization: `Token ${user.token}`,
        },
      });
    }

    return next.handle(request);
  }
}

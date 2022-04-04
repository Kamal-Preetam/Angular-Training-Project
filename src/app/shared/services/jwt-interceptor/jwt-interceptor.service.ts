import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JWTInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authToken = localStorage.getItem('authToken');
    authToken = authToken ? authToken : 'HI';
    console.log('failed to hit request');
    req = req.clone({
      setHeaders: {
        'access-control-allow-origin': '*',
        Authorization: authToken,
      },
    });

    return next.handle(req);
  }
}

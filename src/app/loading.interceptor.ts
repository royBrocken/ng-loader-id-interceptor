import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { interval, Observable, of } from 'rxjs';
import { LoadingService } from './loading.service';
import { delayWhen, finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  /**
   * Detects presence of 'loader-id' in headers to track http request
   * Used in conjuction with LoadingService to inform owner of 'loader-id' of xhr request completion status
   */

  constructor(private readonly loadingService: LoadingService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!request.headers.has('loader-id')) return next.handle(request); //= skip if no loader-id present =>

    const loaderId = request.headers.get('loader-id');
    const clone = request.clone({
      headers: request.headers.delete('loader-id'),
    });

    this.loadingService.startLoading(loaderId);

    return next.handle(clone).pipe(
      delayWhen(() => //= Prevent flicker if requests hover around 0 to 1
        interval(this.loadingService.loading[loaderId] === 1 ? 8000 : 1000) //TODO remove 1000 for real xhr requests/adjust 8000
      ),
      finalize(() => {
        this.loadingService.stopLoading(loaderId);
      })
    );
  }
}

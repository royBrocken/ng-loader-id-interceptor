import { Injectable } from '@angular/core';
import { interval, of } from 'rxjs';
import { LoadingService } from './loading.service';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private readonly loadingService: LoadingService) {}

  get(loaderName: string) {
    this.loadingService.startLoading(loaderName);
    return of('this is the data!').pipe(
      delay(2000),
      tap(() => this.loadingService.endLoading(loaderName)),
    );
  }
}

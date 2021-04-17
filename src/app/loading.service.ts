import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  //TODO refactor this service with a partner store
  /**
   * Keeps track of loaderIds current waiting on xhr request completion in loading.interceptor
   * Used in conjuction with loading.interceptor and owner of loaderId
   */

  loading: { [key: string]: number } = {};

  inc = (key: string) =>
    this.loading.hasOwnProperty(key) ? this.loading[key] + 1 : 1;
  dec = (key: string) =>
    this.loading.hasOwnProperty(key) ? this.loading[key] - 1 : 0; //TODO remove() property when 0 to avoid bloat?

  startLoading(loaderId: string) {
    this.loading = { ...this.loading, [loaderId]: this.inc(loaderId) };
  }
  stopLoading(loaderId: string) {
    this.loading = { ...this.loading, [loaderId]: this.dec(loaderId) };
  }
}

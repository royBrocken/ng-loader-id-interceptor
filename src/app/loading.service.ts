import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading = {};

  startLoading(name: string) {
    this.loading = { ...this.loading, [name]: true }
  }
  endLoading(name: string) {
    this.loading = { ...this.loading, [name]: false }
  }
}

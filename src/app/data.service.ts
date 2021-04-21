import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private readonly httpService: HttpClient) {}

  get(loaderName: string) {
    // console.log('dataservice get() hit')
    return this.httpService
      .get('assets/data.json', {
        headers: { 'loader-id': loaderName }, //TODO refactor loader-id header towards neato solution
      })
      .pipe(delay(1000)); //TODO: remove fake delay
  }
}

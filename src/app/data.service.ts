import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private readonly httpService: HttpClient) {}

  get(loaderName: string) {
    return this.httpService.get('assets/data.json', {
      headers: { 'loader-id': loaderName }, //TODO refactor loader-id header towards neato solution
    });
  }
}

import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Injectable({ providedIn: 'root' })
export class DataAResolver implements Resolve<any> {
  constructor(private readonly dataService: DataService) {}

  resolve(): Observable<any> {
    console.log('resolverA xhr is now swarming');
    return this.dataService.get('screen-overlay');
  }
}

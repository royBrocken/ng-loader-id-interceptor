import { Component } from '@angular/core';
import { DataService } from './data.service';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  vm: any = {};

  constructor(
    private readonly dataService: DataService,
    public loadingService: LoadingService //TODO refactor into store selector
  ) {
    this.vm.loadingService = loadingService;
  }

  getData(loaderName: string) {
    //= mock doing a bunch of stuff
    this.dataService.get(loaderName).subscribe();
  }
}

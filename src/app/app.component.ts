import { Component } from '@angular/core';
import { DataService } from './data.service'
import { LoadingService } from './loading.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  vm: any = {};

  constructor(
    private readonly dataService: DataService,
    private readonly loadingService: LoadingService,
  ) {
    this.vm.loadingService = loadingService;
  }

  getData(loaderName: string) {
    this.dataService.get(loaderName).subscribe()
  }

}

import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../loading.service'

@Component({
  selector: 'app-logo-overlay',
  templateUrl: './logo-overlay.component.html',
  styleUrls: ['./logo-overlay.component.scss']
})
export class LogoOverlayComponent implements OnInit {

  constructor(public loadingService: LoadingService) {}

  ngOnInit(): void {
  }

}

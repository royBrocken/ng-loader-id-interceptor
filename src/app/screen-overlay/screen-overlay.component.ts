import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-screen-overlay',
  templateUrl: './screen-overlay.component.html',
  styleUrls: ['./screen-overlay.component.scss'],
})
export class ScreenOverlayComponent implements OnInit {
  constructor(public loadingService: LoadingService) {}

  ngOnInit(): void {}
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './loading.interceptor';
import { ScreenOverlayComponent } from './screen-overlay/screen-overlay.component';
import { LogoOverlayComponent } from './logo-overlay/logo-overlay.component'
import { DataAResolver } from './data-a.resolver'
import { DataBResolver } from './data-b.resolver'

@NgModule({
  declarations: [AppComponent, ScreenOverlayComponent, LogoOverlayComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
    DataAResolver,
    DataBResolver,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

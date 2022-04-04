import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CommonUiModule } from './shared/common-ui/common-ui.module';
import { CanAccessScreenService } from './shared/services/auth-guard/can-access-screens.service';
import { JWTInterceptorService } from './shared/services/jwt-interceptor/jwt-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GalleryService } from './shared/services/gallery-services/gallery.service';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonUiModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [CanAccessScreenService],
  bootstrap: [AppComponent],
})
export class AppModule {}

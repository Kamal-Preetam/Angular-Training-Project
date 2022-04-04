import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonUiModule } from 'src/app/shared/common-ui/common-ui.module';
import { GalleryService } from 'src/app/shared/services/gallery-services/gallery.service';
import { JWTInterceptorService } from 'src/app/shared/services/jwt-interceptor/jwt-interceptor.service';

@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    CommonUiModule,
    HttpClientModule,
  ],
  providers: [
    GalleryService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptorService,
      multi: true,
    },
  ],
})
export class GalleryModule {}

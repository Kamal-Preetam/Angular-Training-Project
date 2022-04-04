import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryService } from 'src/app/shared/services/gallery.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonUiModule } from 'src/app/shared/common-ui/common-ui.module';

@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    CommonUiModule,
    HttpClientModule,
  ],
  providers: [GalleryService],
})
export class GalleryModule {}

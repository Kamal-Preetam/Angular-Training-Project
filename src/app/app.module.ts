import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CommonUiModule } from './shared/common-ui/common-ui.module';
import { ImageSizeOptimizerPipe } from './shared/pipes/image-size-optimizer.pipe';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonUiModule, CommonModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

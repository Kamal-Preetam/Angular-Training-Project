import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { LabelComponent } from './label/label.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IconsComponent } from './icons/icons.component';
import { RouterModule } from '@angular/router';
import { ImageCardsComponent } from './image-cards/image-cards.component';
import { ImageSizeOptimizerPipe } from '../pipes/image-size-optimizer.pipe';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    ButtonComponent,
    LabelComponent,
    InputBoxComponent,
    NavbarComponent,
    IconsComponent,
    ImageCardsComponent,
    ImageSizeOptimizerPipe,
    PaginationComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ButtonComponent,
    LabelComponent,
    InputBoxComponent,
    IconsComponent,
    NavbarComponent,
    ImageCardsComponent,
    ImageSizeOptimizerPipe,
    PaginationComponent,
  ],
})
export class CommonUiModule {}

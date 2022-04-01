import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { LabelComponent } from './label/label.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IconsComponent } from './icons/icons.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ButtonComponent,
    LabelComponent,
    InputBoxComponent,
    NavbarComponent,
    IconsComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ButtonComponent,
    LabelComponent,
    InputBoxComponent,
    IconsComponent,
    NavbarComponent,
  ],
})
export class CommonUiModule {}

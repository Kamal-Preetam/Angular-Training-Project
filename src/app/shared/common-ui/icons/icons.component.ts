import { Component, Input } from '@angular/core';

@Component({
  selector: 'fx-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css'],
})
export class IconsComponent {
  @Input() iconName: string = '';
  @Input() iconWidth: number = 24;
  @Input() iconHeight: number = 24;
  constructor() {}
}

import { Component, Input, OnInit } from '@angular/core';
import { GalleryImageCard } from '../../models/gallery-image-card/gallery-image-card.model';

@Component({
  selector: 'fx-image-cards',
  templateUrl: './image-cards.component.html',
  styleUrls: ['./image-cards.component.css'],
})
export class ImageCardsComponent implements OnInit {
  @Input() cardData: any;
  constructor() {}

  ngOnInit(): void {}
}

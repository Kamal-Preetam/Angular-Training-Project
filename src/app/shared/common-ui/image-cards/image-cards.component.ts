import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GalleryImageCard } from '../../models/gallery-image-card/gallery-image-card.model';

@Component({
  selector: 'fx-image-cards',
  templateUrl: './image-cards.component.html',
  styleUrls: ['./image-cards.component.css'],
})
export class ImageCardsComponent implements OnInit {
  @Input() cardData: any;
  @Output() itemSelected = new EventEmitter();
  @Input() itemCount: number = 0;
  constructor() {}

  ngOnInit(): void {}

  addToCart(): void {
    this.itemSelected.emit(this.cardData);

    console.log('clicked' + this.cardData.id);
    this.itemCount += 1;
  }
}

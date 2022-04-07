import { Component, OnInit } from '@angular/core';
import { GalleryImageCard } from 'src/app/shared/models/gallery-image-card/gallery-image-card.model';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { GalleryService } from 'src/app/shared/services/gallery-services/gallery.service';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  galleryData: GalleryImageCard[] = [];
  // cartItemCount: number = 0;
  // cartItemsList: Array<any> = [{ id: '', numberOfPurchases: 0 }];

  individualItemCount = 0;
  constructor(
    private galleryService: GalleryService,
    private cartService: CartService
  ) {
    // this.galleryService
    //   .getAllPhotosByURL(5, 20)
    //   .subscribe((data: GalleryImageCard[]) => {
    //     console.log(data);
    //     this.galleryData = data;
    //   });z
    sessionStorage.setItem('loginSuccess', 'success'); //5Mb
  }
  trackDomITems(index: number) {
    return index;
  }
  sendRequest(selectedPageIndex: number) {
    this.galleryService
      .getAllPhotosByURL(selectedPageIndex, 20)
      .subscribe((data: GalleryImageCard[]) => {
        console.log(data);
        this.galleryData = data;
      });
  }
  setItemCount(item: any) {
    this.cartService.setTotalPurchaseOnAddToCart(item);
  }
  sendItemCount(item: any) {
    return this.cartService.getIndividualItemCount(item);
  }
}

import { Component, OnInit } from '@angular/core';
import { GalleryImageCard } from 'src/app/shared/models/gallery-image-card/gallery-image-card.model';
import { GalleryService } from 'src/app/shared/services/gallery-services/gallery.service';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  galleryData: GalleryImageCard[] = [];
  constructor(private galleryService: GalleryService) {
    // this.galleryService
    //   .getAllPhotosByURL(5, 20)
    //   .subscribe((data: GalleryImageCard[]) => {
    //     console.log(data);
    //     this.galleryData = data;
    //   });
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
}

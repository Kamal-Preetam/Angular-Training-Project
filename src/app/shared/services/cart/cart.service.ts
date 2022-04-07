import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItemsList: Array<any> = [{ id: '', numberOfPurchases: 0 }];
  totalItemsCountInCart: number = 0;
  constructor() {}
  getIndividualItemCount(item: any): number {
    let itemInCartList = this.cartItemsList.find(
      (currentItem: any): any => item.id === currentItem.id
    );
    return itemInCartList ? itemInCartList?.numberOfPurchases : 0;
  }
  setTotalPurchaseOnAddToCart(item: any): void {
    // console.log(item);

    this.totalItemsCountInCart += 1;

    let itemInCartList = this.cartItemsList.find(
      (currentItem: any): any => item.id === currentItem.id
    );
    if (itemInCartList) {
      itemInCartList.numberOfPurchases += 1;
    } else {
      this.cartItemsList.push({ id: item.id, numberOfPurchases: 1 });
    }

    let currentval: number = 0;
    this.totalItemsCountInCart = this.cartItemsList.reduce(
      (totalPurchase: number, item: any): number => {
        totalPurchase += item.numberOfPurchases;
        return totalPurchase;
      },
      0
    );

    console.log('total count : ' + this.totalItemsCountInCart);
  }
}

import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'fx-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  showNavMenus: boolean = false;
  toggleMenu: boolean = false;
  totalItemsCount: number = 0;
  constructor(private router: Router, public cartService: CartService) {
    //cartService

    // Routing
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        console.log('Hi');
        if (this.router.url === '/' || this.router.url === '/login') {
          this.showNavMenus = false;
        } else {
          this.showNavMenus = true;
        }
      }
    });

    let getType = NavBarTypes.ThismMyClasVariable;
    // let x = new NavBarTypes()
    NavBarTypes.getInstance();
  }

  toggleMenuBar() {
    this.toggleMenu = !this.toggleMenu;
  }

  getClassForToggleMenu() {
    return this.toggleMenu ? 'show-mobile-menu' : 'hide-mobile-menu';
  }
}

export class NavBarTypes {
  public static readonly ThismMyClasVariable: string = 'nav-bar-with-icon';
  static getInstance() {}
}

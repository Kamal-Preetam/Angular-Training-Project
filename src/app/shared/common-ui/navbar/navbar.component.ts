import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'fx-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  showNavMenus: boolean = true;
  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        console.log('Hi');
        if (this.router.url === '/' || this.router.url === '/login') {
          this.showNavMenus = false;
        }
      }
    });

    let getType = NavBarTypes.ThismMyClasVariable;
    // let x = new NavBarTypes()
    NavBarTypes.getInstance()

  }
}

export class NavBarTypes {
  public static readonly ThismMyClasVariable: string = 'nav-bar-with-icon';
  static getInstance() {}
}

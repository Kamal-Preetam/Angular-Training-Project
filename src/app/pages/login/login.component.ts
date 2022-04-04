import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  arrayData = [1, 2, 3, 4, 5, 6, 7];
  constructor(private router: Router) {}

  validateLogin() {
    ///
    localStorage.setItem('loginSuccess', 'success'); //10MB
    sessionStorage.setItem('loginSuccess', 'success'); //5Mb
    this.router.navigate(['/home']);
  }
}

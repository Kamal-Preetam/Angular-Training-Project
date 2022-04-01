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
    this.router.navigate(['/home']);
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 arrayData = [1,2,3,4,5,6,7]
  constructor() { }

  ngOnInit(): void {
  }

}

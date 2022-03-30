import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent implements OnInit {
@Input() inputType = ""
@Input() placeHolder = ""
@Input() headerText = ""
@Input() headerTextColor = "black"
  constructor() { }

  ngOnInit(): void {
  }


}

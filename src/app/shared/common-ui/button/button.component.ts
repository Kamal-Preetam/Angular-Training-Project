import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fx-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() buttonType = 'warning';
  @Input() roundedCorners = false;
  @Input() hoverEffect = false;
  constructor() { }

  ngOnInit(): void {
  }
  buttonStyles(){
    let buttonEffects = this.buttonType + this.checkRoundedCorners();
    buttonEffects += this.checkHoverEffect();
    return buttonEffects ;
  }

  checkHoverEffect(){
    return this.hoverEffect ? ' hover-effect ' : "";
  }

  checkRoundedCorners(){
    return this.roundedCorners ? ' rounded-corners ' : "";
  }
}

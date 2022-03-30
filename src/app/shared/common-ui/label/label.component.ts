import { Component, Input } from '@angular/core';

@Component({
  selector: 'fx-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent  {
  @Input() textType : string = '';
  @Input() textColor : string = 'black';
  @Input() isJumboText : boolean = false;
  @Input() textPosition : string = '';
  constructor() { }


  addJumboText(): string {
    return this.isJumboText ? ' center-text ': "";

  }
  /**
   *
   * @returns classe names after appending
   */
  getClassProperties(): string {
    let textType : string = this.textType + this.addJumboText()
    return textType;
  }


}

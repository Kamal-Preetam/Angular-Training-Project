import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'fx-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() numberOfPages: number = 5;
  @Output() selectedPage: number = 1;
  constructor() {}

  createPageIndex(): number[] {
    const paginationIndexArray = [];
    for (let i = 1; i <= this.numberOfPages; i++) {
      paginationIndexArray.push(i);
    }
    return paginationIndexArray;
  }
}

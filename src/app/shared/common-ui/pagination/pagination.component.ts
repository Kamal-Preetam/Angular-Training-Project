import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'fx-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() numberOfPages: number = 5;
  @Output() selectedPage: EventEmitter<number> = new EventEmitter<number>();
  currentPage: number = 1;

  constructor() {}

  ngOnInit(): void {
    this.selectedPage.emit(1);
    this.currentPage = 1;
  }

  setSelectedPageIndex(selectedIndex: number): void {
    this.selectedPage.emit(selectedIndex);

    this.currentPage = selectedIndex;
  }
  goToNextPage() {
    if (this.currentPage < this.numberOfPages) {
      this.currentPage += 1;
    }
    this.selectedPage.emit(this.currentPage);
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
    }
    this.selectedPage.emit(this.currentPage);
  }

  /**
   * Method is used to add backgound color for the selected page;
   * @param currentPageSelected : Value passed from button click to check current selected item
   * @returns : return calss name to append with the css class name of the element
   */
  addActivePageClass(currentPageSelected: number): string {
    return this.currentPage == currentPageSelected ? ' active ' : '';
  }
}

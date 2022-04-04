import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToArray',
})
export class ConvertToArrayPipe implements PipeTransform {
  transform(numberOfPages: number): any[] {
    const paginationIndexArray = [];
    for (let i = 1; i <= numberOfPages; i++) {
      paginationIndexArray.push(i);
    }
    return paginationIndexArray;
  }
}

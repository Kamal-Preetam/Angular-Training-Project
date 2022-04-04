import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageSizeOptimizer',
})
export class ImageSizeOptimizerPipe implements PipeTransform {
  transform(url: string, height?: string, width?: string): string {
    const urlPathContents = url?.split('/');
    if (urlPathContents) {
      urlPathContents[urlPathContents.length - 1] = height ? height : '550';
      urlPathContents[urlPathContents.length - 2] = width ? width : '550';
      urlPathContents[1] = '/';
      return urlPathContents.join('/');
    }
    console.log(urlPathContents);
    return url;
  }
}

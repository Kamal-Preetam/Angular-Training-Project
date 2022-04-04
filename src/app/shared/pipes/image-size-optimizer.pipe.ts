import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageSizeOptimizer',
})
export class ImageSizeOptimizerPipe implements PipeTransform {
  transform(url: string): string {
    const urlPathContents = url?.split('/');
    if (urlPathContents) {
      urlPathContents[urlPathContents.length - 1] = '150';
      urlPathContents[urlPathContents.length - 2] = '150';
      urlPathContents[1] = '/';
      return urlPathContents.join('/');
    }
    console.log(urlPathContents);
    return url;
  }
}

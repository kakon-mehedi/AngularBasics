import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortName',
})
export class ShortNamePipe implements PipeTransform {
  transform(value: string, length: number) {
    if (value.length > length) {
      return value.substring(0, length) + '...';
    }
    return value;
  }
}

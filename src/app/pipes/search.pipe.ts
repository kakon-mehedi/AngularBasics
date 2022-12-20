import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(values: any, searchQuery: string) {
    if (searchQuery === ' ') {
      return values;
    }

    let users = [];

    for (let user of values) {
      if (user.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        users.push(user);
      }
    }
    return users;
  }
}

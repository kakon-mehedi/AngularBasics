import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(values: any, searchQuery: string) {
    if (searchQuery === '') {
      return values;
    }

    let users = [];

    for (let user of values) {
      let userNameIncludesSeachQuery = user.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      let mobileIncludesSearchQuery = user.mobile
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      if (userNameIncludesSeachQuery || mobileIncludesSearchQuery) {
        users.push(user);
      }
    }
    return users;
  }
}

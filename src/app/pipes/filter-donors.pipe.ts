import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDonors',
})
export class FiterDonorsPipe implements PipeTransform {
  transform(values: any, filterQuery: string) {
    if (filterQuery === '') {
      return values;
    }

    console.log(filterQuery);

    let donors = [];

    for (let donor of values) {
      let filterResult =
        donor.bloodGroup.toLowerCase() === filterQuery.toLowerCase();

      if (filterResult) donors.push(donor);
    }
    return donors;
  }
}

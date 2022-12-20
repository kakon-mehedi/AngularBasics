import { Component } from '@angular/core';

@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.css'],
})
export class UserFilterComponent {
  searchQuery: string = ''; //this is the default value of ngmodel input file in user-filter html file
  users = [
    { id: 1, name: 'Kakon', joined: new Date('11-14-1996') },
    { id: 2, name: 'tamanna', joined: new Date('10-05-2001') },
    { id: 3, name: 'Imrose', joined: new Date('10-05-2001') },
    { id: 4, name: 'Borsha', joined: new Date('02-06-2020') },
    { id: 5, name: 'Mehedi', joined: new Date('11-15-1996') },
  ];
}

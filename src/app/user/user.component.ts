import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  constructor(private route: ActivatedRoute) {}
  name = '';
  id = '';

  ngOnInit() {
    // Fetching link Parameters value from the actived link
    this.route.params.subscribe((data: Params) => {
      this.name = data['name'];
      this.id = data['id'];
    });
  }
}

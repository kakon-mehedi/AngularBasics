import { Component, Input } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
})
export class SinglePostComponent {
  constructor(private apiService: APIService) {}
  @Input() post: any;
  @Input() currentID: any;

  handleEditClick() {
    this.apiService.isEditClicked.next(true);
    this.apiService.currentID.next(this.currentID);
  }
}

import { Component } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent {
  constructor(private apiService: APIService) {
    this.apiService.isEditClicked.subscribe((data) => {
      this.editClicked = data;
      this.handleEditClick();
    });
  }

  authorNameValue = '';
  postValue = '';
  submitButtonText = 'Submit';
  submitButtonColor = 'primary';
  editClicked: any;
  urlKey = '';

  // POSTING FORM DATA

  handleSubmit(formValue: any) {
    this.handleStatus();

    if (this.editClicked) {
      this.apiService.editPostData(formValue, this.urlKey);
      setTimeout(() => {
        this.authorNameValue = '';
        this.postValue = '';
      }, 2000);
    } else {
      this.apiService.postData(formValue);
    }
  }

  // Sending Status Check and Changing button clolor

  handleStatus() {
    this.apiService.operationStatus.subscribe((status) => {
      if (status === 'ACTIVE') {
        this.submitButtonColor = 'accent';
        this.submitButtonText = 'Sending...';
      } else if (status === 'DATASENT') {
        this.submitButtonColor = 'warn';
        this.submitButtonText = 'Sent';
      } else {
        this.submitButtonText = 'Submit';
        this.submitButtonColor = 'primary';
      }
    });
  }

  handleEditClick() {
    let currentID;
    let currentPost;

    this.apiService.currentID.subscribe((id) => {
      currentID = id;
      currentPost = this.apiService.findCurrenPostData(currentID);
      this.authorNameValue = currentPost.authorName;
      this.postValue = currentPost.post;
      this.urlKey = currentPost.postId;
    });
  }
}

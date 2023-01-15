import { Component } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent {
  constructor(private apiService: APIService) {}

  submitButtonText = 'Submit';
  submitButtonColor = 'primary';

  // POSTING FORM DATA

  handleSubmit(formValue: any) {
    this.handleStatus();
    this.apiService.postData(formValue);
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

    console.log('Status function called');
  }
}

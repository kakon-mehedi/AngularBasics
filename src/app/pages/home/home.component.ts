import { Component } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private apiService: APIService) {}

  posts: any;

  ngOnInit() {
    this.getPostsData();
  }

  getPostsData() {
    this.apiService.getPostData();
    this.apiService.fetchedPosts.subscribe((allPost) => {
      this.posts = allPost;
    });
  }
}

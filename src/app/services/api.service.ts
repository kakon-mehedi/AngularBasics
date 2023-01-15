import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private http: HttpClient) {}

  API_URL = 'https://post-app-mat-default-rtdb.firebaseio.com/posts.json';

  operationStatus = new Subject();
  fetchedPosts = new Subject();

  getPostData() {
    this.http
      .get(this.API_URL)
      .pipe(
        map((resData: any) => {
          const postArray: any[] = [];
          for (const keyData in resData) {
            // resData is an array
            // console.log(resData[keyData]);
            // pusing the modified object
            postArray.push({ postId: keyData, ...resData[keyData] });
          }
          return postArray;
        })
      )
      .subscribe((postData) => {
        this.fetchedPosts.next(postData);
      });
  }

  postData(formValue: any) {
    this.operationStatus.next('ACTIVE');
    return this.http.post(this.API_URL, formValue).subscribe((response) => {
      this.operationStatus.next('DATASENT');
      this.getPostData();
      setTimeout(() => {
        this.operationStatus.next('FINISHED');
      }, 3000);
    });
  }
}

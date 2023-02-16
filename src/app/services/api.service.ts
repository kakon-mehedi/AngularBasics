import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  API_URL = 'https://avfreetriallist-default-rtdb.firebaseio.com/posts.json/';

  operationStatus = new Subject();
  fetchedPosts = new Subject();
  isEditClicked = new Subject();
  currentID = new Subject();
  totalPosts: any[] = [];
  deleteOperationStatusFlag = new Subject();

  getPostData() {
    this.http
      .get(this.API_URL)
      .pipe(
        map((resData: any) => {
          const postArray: any[] = [];
          for (const keyData in resData) {
            postArray.push({ postId: keyData, ...resData[keyData] });
          }
          return postArray;
        })
      )
      .subscribe((postData) => {
        this.fetchedPosts.next(postData);
        this.totalPosts = postData;
      });
  }

  postData(formValue: any) {
    this.operationStatus.next('ACTIVE');
    return this.http.post(this.API_URL, formValue).subscribe((response) => {
      this.getPostData();
    });
  }
}

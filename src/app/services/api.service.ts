import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private http: HttpClient) {}

  API_URL = 'https://post-app-mat-default-rtdb.firebaseio.com/posts.json/';

  PUT_API_URL = 'https://post-app-mat-default-rtdb.firebaseio.com/posts/';

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
        this.totalPosts = postData;
      });
  }

  postData(formValue: any) {
    this.operationStatus.next('ACTIVE');
    return this.http.post(this.API_URL, formValue).subscribe((response) => {
      this.operationStatus.next('DATASENT');
      this.getPostData();
      setTimeout(() => {
        this.operationStatus.next('FINISHED');
      }, 2000);
    });
  }

  editPostData(formValue: any, postKey: string) {
    this.operationStatus.next('ACTIVE');
    return this.http
      .put(this.PUT_API_URL + postKey + '.json', formValue)
      .subscribe((response) => {
        this.operationStatus.next('DATASENT');
        this.getPostData();
        this.isEditClicked.next(false);
        setTimeout(() => {
          this.operationStatus.next('FINISHED');
        }, 2000);
      });
  }

  deleteAllPostData() {
    let buttonFlag = {
      color: 'accent',
      text: 'Deleting...',
    };

    this.deleteOperationStatusFlag.next(buttonFlag);

    this.http.delete(this.API_URL).subscribe(() => {
      buttonFlag = {
        color: 'primary',
        text: 'Deleted',
      };
      this.deleteOperationStatusFlag.next(buttonFlag);
      this.getPostData();
    });
  }

  findCurrenPostData(id: any) {
    return this.totalPosts[id];
  }
}

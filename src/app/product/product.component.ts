import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  constructor(private apiService: ApiService) {
    this.onFetchData();
  }

  requestArr: any;
  isLoading = false;

  onFetchData() {
    this.isLoading = true;
    this.apiService
      .fetchData()
      .pipe(
        map((data: any) => {
          const postArr: any[] = [];
          for (const key in data) {
            postArr.push({ postId: key, ...data[key] });
          }
          return postArr;
        })
      )
      .subscribe((res) => {
        this.requestArr = res;
        this.isLoading = false;
      });
  }
}

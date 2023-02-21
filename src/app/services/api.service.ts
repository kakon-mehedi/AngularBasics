import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  APIUrl = 'https://avfreetriallist-default-rtdb.firebaseio.com/posts.json';

  fetchData() {
    return this.http.get(this.APIUrl);
  }
}

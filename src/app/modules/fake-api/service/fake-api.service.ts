import { environment } from './../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FakeApiService {
  URL: string = environment.api;

  constructor(private httpClient: HttpClient) {}

  getPosts(): Observable<any> {
    return this.httpClient.get(`${this.URL}/posts`);
  }
}

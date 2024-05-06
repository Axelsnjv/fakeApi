import { Component, OnInit } from '@angular/core';
import { FakeApiService } from '../service/fake-api.service';

@Component({
  selector: 'app-fake-api-list',
  templateUrl: './fake-api-list.component.html',
  styleUrls: ['./fake-api-list.component.css'],
})
export class FakeApiListComponent implements OnInit {
  postsList: Array<any> = [];

  constructor(private fakeApiService: FakeApiService) {}

  ngOnInit(): void {
    this.fakeApiService.getPosts().subscribe((response: any) => {
      this.postsList = response;
      console.log(response);
    });
  }
}

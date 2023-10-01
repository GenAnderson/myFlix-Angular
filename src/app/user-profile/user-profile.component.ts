import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  constructor(public fetchApiData: FetchApiDataService) {}

  ngOnInit(): void {
    this.getUserProfile();

    const user = this.getUser();
  }

  getUser(): void {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

  getUserProfile(): void {}
}

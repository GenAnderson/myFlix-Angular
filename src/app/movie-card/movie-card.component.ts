import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { DetailBoxComponent } from '../detail-box/detail-box.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  goToUserProfile(): void {
    this.router.navigate(['user']);
  }

  signOut(): void {
    this.router.navigate(['welcome']);
    localStorage.clear();
  }

  getDirector(director: any): void {
    this.dialog.open(DetailBoxComponent, {
      data: {
        title: director.Name,
        content: director.Bio,
        other: director.Birth,
      },
    });
  }

  getGenre(genre: any): void {
    this.dialog.open(DetailBoxComponent, {
      data: {
        title: genre.Name,
        content: genre.Description,
      },
    });
  }

  getDescription(description: any): void {
    this.dialog.open(DetailBoxComponent, {
      data: {
        title: description.Title,
        content: description.Description,
      },
    });
  }
}

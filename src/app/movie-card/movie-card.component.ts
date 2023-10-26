import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { DetailBoxComponent } from '../detail-box/detail-box.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];
  favoriteMovies: any[] = [];
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      // console.log(this.movies);
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

  addFavorite(id: string): void {
    this.fetchApiData.addFavoriteMovie(id).subscribe((res) => {
      this.snackBar.open('Saved to favorites', 'ok', {
        duration: 2000,
      });
      this.favoriteMovies = res.FavoriteMovies;
    });
  }

  deleteFavorite(id: string): void {
    this.fetchApiData.deleteFavoriteMovie(id).subscribe((res) => {
      this.snackBar.open('Deleted from favorites', 'ok', {
        duration: 2000,
      });
      this.favoriteMovies = res.FavoriteMovies;
    });
  }

  isFavorite(id: string): boolean {
    return this.fetchApiData.isFavoriteMovie(id);
  }
}

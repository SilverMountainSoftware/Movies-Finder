import { Component } from '@angular/core';
import {MoviesService} from './movies.service';
import { Genre } from './interfaces/movies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MoviesService]
})
export class AppComponent {
  genres: Array<Genre>;

  constructor(private _moviesServices: MoviesService) {
    this._moviesServices.getGenres().subscribe(res => {
      this.genres = res.genres.slice(0, 20);
    });
  }
}

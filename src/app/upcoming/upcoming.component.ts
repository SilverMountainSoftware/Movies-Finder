import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
import { UpcomingMovie, SearchMovie } from '../interfaces/movies';

@Component({
  selector: 'mf-app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
  movies: Array<UpcomingMovie>;
  searchRes: Array<SearchMovie>;
  searchStr: string;

  constructor(private _moviesService: MoviesService) {
    this._moviesService.getUpComingMovies().subscribe(res => {
      this.movies = res.results;
    });
  }

  ngOnInit() {
  }

  searchMovies() {
    this._moviesService.searchMovies(this.searchStr).subscribe(res => {
      this.searchRes = res.results;
    });
  }

}

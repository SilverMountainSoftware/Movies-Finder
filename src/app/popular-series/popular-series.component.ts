import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { PopularMovies } from '../interfaces/movies';

@Component({
  selector: 'app-popular-series',
  templateUrl: './popular-series.component.html',
  styleUrls: ['./popular-series.component.css']
})
export class PopularSeriesComponent implements OnInit {
  series: Array<PopularMovies>;

  constructor(private _moviesService: MoviesService) {
    this._moviesService.getPopularSeries().subscribe(res => {
      this.series = res.results;
    });
  }

  ngOnInit() {
  }

}
